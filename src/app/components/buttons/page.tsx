import { ChevronRight, Heart, LoaderCircle, Trash } from "lucide-react";
import Button from "../ui/button";
import ButtonIcon from "../ui/icon-button";

export default function Home() {
  
  return (
    <div className="flex items-center justify-center flex-wrap h-screen gap-4 bg-surface">
      <div className="flex gap-4 flex-wrap">
        <ButtonIcon icon={<Heart />}></ButtonIcon>
        <ButtonIcon disabled icon={<Heart />}></ButtonIcon>
      </div>
      <div className="flex gap-4 flex-wrap">
        <Button
          variant="primary"
          className="cursor-wait"
          size="lg"
          iconLeft={<LoaderCircle className="animate-spin" />}
        >
          Saving...
        </Button>
        <Button variant="primary" disabled size="lg">
          Disabled
        </Button>
      </div>
      <div className="flex gap-4 flex-wrap">
        <Button variant="destructive" size="lg" iconLeft={<Trash />}>
          Delete
        </Button>
        <Button variant="destructive" size="md" iconLeft={<Trash />}>
          Delete
        </Button>
        <Button variant="destructive" size="sm" iconLeft={<Trash />}>
          Delete
        </Button>
      </div>
      <div className="flex gap-4 flex-wrap">
        <Button variant="tertiary" size="lg" iconRight={<ChevronRight />}>
          View Details
        </Button>
        <Button variant="tertiary" size="md" iconRight={<ChevronRight />}>
          View Details
        </Button>
        <Button variant="tertiary" size="sm" iconRight={<ChevronRight />}>
          View Details
        </Button>
      </div>
      <div className="flex gap-4 flex-wrap">
        <Button variant="secondary" size="lg" iconRight={<ChevronRight />}>
          Continue Meal Plan
        </Button>
        <Button variant="secondary" size="md" iconRight={<ChevronRight />}>
          Continue Meal Plan
        </Button>
        <Button variant="secondary" size="sm" iconRight={<ChevronRight />}>
          Continue Meal Plan
        </Button>
      </div>
      <div className="flex gap-4 flex-wrap">
        <Button variant="primary" size="lg" iconRight={<ChevronRight />}>
          Hello
        </Button>
        <Button variant="primary" size="md" iconRight={<ChevronRight />}>
          Hello
        </Button>
        <Button variant="primary" size="sm" iconRight={<ChevronRight />}>
          Hello
        </Button>
      </div>
      <div className="flex gap-4 flex-wrap">
        <Button variant="primary" size="lg">
          Hello
        </Button>
        <Button variant="primary" size="md">
          Hello
        </Button>
        <Button variant="primary" size="sm">
          Hello
        </Button>
      </div>
      <div className="flex gap-4 flex-wrap">
        <Button variant="secondary" size="lg">
          Hello
        </Button>
        <Button variant="secondary" size="md">
          Hello
        </Button>
        <Button variant="secondary" size="sm">
          Hello
        </Button>
      </div>
    </div>
  );
}
