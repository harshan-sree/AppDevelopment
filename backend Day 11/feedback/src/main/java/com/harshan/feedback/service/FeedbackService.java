package com.harshan.feedback.service;

import java.util.List;

import com.harshan.feedback.dto.request.FeedbackRequest;
import com.harshan.feedback.dto.response.FeedbackResponse;

public interface FeedbackService {

    boolean saveFeedback(FeedbackRequest request);

    List<FeedbackResponse> getFeedbacks();

}
