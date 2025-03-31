export interface ICategory {
  id: number;
  name: string;
	description: string;
	parentCategoryId: number;
  isSelectable: boolean;
  image: string;
  hasSubcategories: boolean;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;
};

