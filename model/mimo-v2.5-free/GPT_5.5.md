# MiMo v2.5 Free — findings by GPT 5.5

- Source: Xiaomi/MiMo v2.5 Free
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.5 Free
- **Short description:** MiMo v2.5 Free is the free-tier exposure of Xiaomi's earlier MiMo v2.5 family, a low-cost/open-weight agentic model line later superseded by MiMo v2.6.
- **Provider / access:** OpenCode Zen/free hosted routes and Xiaomi MiMo ecosystem.
- **Release / knowledge:** MiMo v2.5 was released in spring 2026 and later scheduled for deprecation after v2.6.
- **IDs:** `xiaomi/mimo-v2.5-free`
- **Context window:** Exact free-route context not verified; MiMo V2 family public claims include 1M-class contexts for Pro routes.
- **Modalities:** Exact free-route modalities not verified.
- **Pricing (as of 2026-10-05):** Free tier in this repo; Xiaomi pricing docs say v2.5 and v2.5-pro will be deprecated on 2026-10-21, with newer V2.6 routes replacing them.
- **Architecture:** Xiaomi MiMo V2.5 family; details vary by route.

### Raw benchmarks found

Agent / tool use:

- Xiaomi API pricing docs: state `mimo-v2.5-pro` and `mimo-v2.5` are scheduled for official deprecation at 10:00 Beijing time on 2026-10-21 (`https://mimo.mi.com/docs/pricing`).
- MiMo V2.6 coverage says V2.6 Flash is the direct successor to MiMo v2.5 with the same size class and price tier, implying V2.5 is now legacy (`https://cheapestinference.com/blog/mimo-v2-6/`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- No exact GPQA/HLE rows found for MiMo v2.5 Free.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- User discussions describe free MiMo/OpenCode routes as useful, but exact MiMo v2.5 Free coding rows were not found.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Exact free-route context was not verified; no retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 70/100.** Useful free agent route, but legacy and sparsely benchmarked.
- **Reasoning: 70/100.** Legacy free tier with no public reasoning rows.
- **Context window: 78/100.** Likely decent MiMo context, exact free route not verified.
- **Multimodal: 55/100.** Modality support not verified.
- **Coding: 72/100.** Useful for lightweight coding, superseded by v2.6 Flash/Free.
- **Cost efficiency: 98/100.** Free-tier access is excellent value.
- **Overall Score: 69/100.** Mean of the five quality dimensions; best fit is legacy free experimentation, with v2.6 Free preferred when available.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
