# Qwen 3.7 — findings by GPT-5.6 Sol

- Source: Alibaba/Qwen 3.7 family record
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** This folder is an ambiguous family-level record: Alibaba released distinct Qwen3.7 Max and Plus SKUs, while no exact bare `qwen-3.7` checkpoint or API route was verified.
- **Provider / access:** No exact provider route for bare Qwen 3.7 found. Verified family routes are `qwen3.7-max` and `qwen3.7-plus` through Alibaba Cloud/Qwen services.
- **Release / knowledge:** Qwen3.7 Max launched 2026-05-20; bare-model release and cutoff are unverified.
- **IDs:** No exact `qwen-3.7` ID verified; family IDs must not be conflated.
- **Context window:** Unverified for the bare record; Max and Plus each advertise about 1M tokens.
- **Modalities:** Unverified for the bare record; Max is text-only while Plus supports text, image, and video, demonstrating why family-level inheritance would be misleading.
- **Pricing (as of 2026-11-03):** No exact bare-model tariff. Max and Plus have materially different pricing tiers.
- **Architecture:** No exact bare-model architecture or parameter count disclosed.

### Raw benchmarks found

Agent / tool use:

- No verified public score found for the exact bare `qwen-3.7` model/ID.
- Family-only evidence, not attributable to this exact record: Qwen3.7 Max Terminal-Bench 2.1 **61.05%** (Vals), Qwen3.7 Plus Terminal-Bench 2.0 **70.3%** (BenchmarkList).

Reasoning / knowledge:

- No verified public score found for the exact bare model.
- Family-only evidence: Qwen3.7 Max GPQA Diamond **90.15%** (Vals) and vendor-reported **92.4%** in another harness.

Coding:

- No verified public score found for the exact bare model.
- Family-only evidence: Max SWE-bench **68.8%**, LiveCodeBench **87.06%**, and Vibe Code Bench **47.67%** (Vals); these cannot identify a bare checkpoint.

Long context:

- No bare-model retrieval result. Qwen3.7 Max MRCR v2 at 256K is reported as **86.7%**, but belongs to the Max SKU.

### Normalized scores (1–100)

- **Tool use: 70/100.** Provisional family-level estimate only; exact bare model evidence is absent and caps confidence sharply.
- **Reasoning: 72/100.** Strong Max-family results exist, but cannot safely be transferred to an unidentified bare checkpoint.
- **Context window: 70/100.** Family members advertise 1M, while the exact record's capacity is unverified.
- **Multimodal: 15/100.** The exact record has no verified modality contract; conservative text-only baseline avoids inheriting Plus vision/video.
- **Coding: 72/100.** Family coding evidence is strong but identity ambiguity prevents a frontier score.
- **Cost efficiency: 55/100.** No exact tariff; Max and Plus prices differ substantially.
- **Overall Score: 60/100.** Half-up mean of the five quality dimensions; use a specific Max or Plus record instead of this ambiguous family label.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-11-03
- Method: public internet identity audit plus official Qwen family documentation and independent Vals/BenchmarkList sources; all numeric evidence is explicitly labeled family-only because no exact bare route was found.
- Reference URLs:
  - [Qwen3.7 Max announcement](https://qwen.ai/blog?id=qwen3.7)
  - [Qwen Code provider documentation](https://qwenlm.github.io/qwen-code-docs/en/users/configuration/model-providers/)
  - [Vals Qwen3.7 Max](https://www.vals.ai/models/alibaba_qwen3.7-max)
  - [BenchmarkList Qwen3.7 Plus](https://benchmarklist.com/models/qwen-qwen3.7-plus)
  - [Gradually Qwen3.7 Max specifications](https://www.gradually.ai/en/ai-models/qwen-3.7-max)
- Future sources: add a new file next to this one using the same headings.
