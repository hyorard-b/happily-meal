import Button from "components/Button/Button";
import MealDialog from "components/MealDialog/MealDialog";
import { Modal } from "components/Modal/Modal";
import React from "react";
import { palette } from "styles";
import {
  MealDialogNextButton,
  MealDialogPrevButton,
  StyledMealWrapper,
  MealDialogSubmitButton,
  MealDialogEditButton,
  StyledMealContainer,
  MealDialogCloseButton,
  StyledMealModalWrapper,
  StyledMealModal,
} from "./MealModalGroup.styled";

export const MealModalGroup = ({
  mealsArrayList,
  onMealModal,
  prevMeal,
  nextMeal,
  mealListData,
  mealLength,
  onSetting,
  slideRef,
}) => {
  return (
    <StyledMealModal>
      <StyledMealContainer>
        <StyledMealWrapper ref={slideRef}>
          {mealsArrayList.map(({ id, review, photo, title }) => (
            <MealDialog
              key={id}
              id={id}
              title={title}
              photo={photo}
              review={review}
              onMealModal={onMealModal}
              prevMeal={prevMeal}
              nextMeal={nextMeal}
              mealListData={mealListData}
              mealLength={mealLength}
              slideRef={slideRef}
            ></MealDialog>
          ))}
        </StyledMealWrapper>
        <MealDialogSubmitButton type="button" onClick={onMealModal}>
          확인
        </MealDialogSubmitButton>
        <MealDialogEditButton onClick={onSetting}>수정</MealDialogEditButton>
        {/* </StyledButtonContainer> */}
        <MealDialogPrevButton type="button" onClick={prevMeal}>
          &#60;
        </MealDialogPrevButton>
        <MealDialogNextButton type="button" onClick={nextMeal}>
          &#62;
        </MealDialogNextButton>
        <MealDialogCloseButton Button onClick={onMealModal}>
          X
        </MealDialogCloseButton>
      </StyledMealContainer>
    </StyledMealModal>
  );
};
