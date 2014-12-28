package me.showfun.service.impl;

import com.google.common.collect.Lists;
import me.showfun.dao.WorkDao;
import me.showfun.dto.WaterfallItemDTO;
import me.showfun.model.PaginatedList;
import me.showfun.model.Work;
import me.showfun.model.WorkType;
import me.showfun.service.WorkManager;
import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Jamy on 14-12-21.
 */
@Service("workManager")
public class WorkManagerImpl extends GenericManagerImpl<Work, Long> implements WorkManager {

    private WorkDao workDao;

    @Autowired
    private Mapper dozer;

    @Autowired
    @Override
    public void setWorkDao(WorkDao workDao) {
        super.dao = workDao;
        this.workDao = workDao;
    }

    @Override
    public WaterfallItemDTO getGallery(Long workId) {
        Work work = dao.get(workId);
        return work != null ? dozer.map(work, WaterfallItemDTO.class) : null;
    }

    @Override
    public PaginatedList<Work> listByWorkType(WorkType workType, PaginatedList pagination) {
        return workDao.listByWorkType(pagination, workType);
    }

    @Override
    public PaginatedList<WaterfallItemDTO> listDTOByWorkType(WorkType type, PaginatedList pagination) {
        PaginatedList<Work> list = workDao.listByWorkType(pagination, type);
        PaginatedList<WaterfallItemDTO> paginatedList = new PaginatedList<>(pagination.getPage(), pagination.getSize());
        paginatedList.setTotal(list.getTotal());
        if (list.getList() != null && list.getList().size() > 0) {
            List<WaterfallItemDTO> dtoList = Lists.newArrayList();
            for (Work work : list.getList()) {
                dtoList.add(dozer.map(work, WaterfallItemDTO.class));
            }
            paginatedList.setList(dtoList);
        }
        return paginatedList;
    }
}
