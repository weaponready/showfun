package me.showfun.service;

import me.showfun.dao.WorkDao;
import me.showfun.dto.WaterfallItemDTO;
import me.showfun.model.PaginatedList;
import me.showfun.model.Work;
import me.showfun.model.WorkType;

/**
 * Created by Jamy on 14-12-21.
 */
public interface WorkManager extends GenericManager<Work, Long> {

    public void setWorkDao(WorkDao workDao);

    public WaterfallItemDTO getGallery(Long workId);

    public PaginatedList<Work> listByWorkType(WorkType workType, PaginatedList pagination);

    public PaginatedList<WaterfallItemDTO> listDTOByWorkType(WorkType type, PaginatedList pagination);
}
