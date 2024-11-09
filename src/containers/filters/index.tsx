import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface FiltersProps {
    setFilter: (filter: string) => void;
}

export const Filters = ({ setFilter }: FiltersProps) => {
    return (
        <section className="flex flex-col gap-4 mt-4 mb-8">
            <RadioGroup defaultValue="all" className="flex gap-2 flex-wrap"
                onValueChange={(value) => setFilter(value)}
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="r1" />
                    <Label htmlFor="r1">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pending" id="r2" />
                    <Label htmlFor="r2">Pending</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="completed" id="r3" />
                    <Label htmlFor="r3">Completed</Label>
                </div>
            </RadioGroup>

        </section>
    )
}