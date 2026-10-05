# MiMo v2.6 Free — findings by GPT 5.5

- Source: Xiaomi/MiMo v2.6 Flash Free
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.6 Free
- **Short description:** MiMo v2.6 Free is the OpenCode Zen free-tier exposure of Xiaomi's MiMo v2.6 Flash model, useful as a no-cost long-context coding workhorse.
- **Provider / access:** OpenCode Zen free tier / Xiaomi MiMo route family.
- **Release / knowledge:** MiMo v2.6 launched in September 2026, with free OpenCode Zen route appearing shortly after.
- **IDs:** `opencode/mimo-v2.6-flash-free`
- **Context window:** MiMo v2.6 Flash public API lists about 1,048,576 input and 131,072 max output.
- **Modalities:** MiMo v2.6 Flash routes include image input, tool calling, and reasoning; repo's free route likely mirrors Flash capabilities subject to Zen limits.
- **Pricing (as of 2026-10-05):** Free via OpenCode Zen; paid Xiaomi Flash list is about $0.14/M input and $0.28/M output.
- **Architecture:** MiMo v2.6 Flash: 309B total / 15B active sparse MoE.

### Raw benchmarks found

Agent / tool use:

- CheapestInference: MiMo-V2.6 Flash is the direct successor to MiMo v2.5, same size class and price tier, with agent benchmark scores within a few points of Pro (`https://cheapestinference.com/blog/mimo-v2-6/`).
- RouterPlex: MiMo V2.6 Pro/Flash rows list 1,048,576 context, 131,072 output cap, image input, tool calling, reasoning, and Xiaomi pricing sources (`https://routerplex.com/blog/mimo-v2-6-api-pricing-setup`).
- OpenCode issue: shows `opencode/mimo-v2.6-flash-free` as a Zen free-tier model ID in practical CLI use (`https://github.com/anomalyco/opencode/issues/50451`).
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- Public free-tier discussions describe MiMo v2.6 Flash as strong for small tasks/codebases but sometimes cluttering context with recursive searches.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- MiMo v2.6 Flash is coding/agent-tuned and reported close to Pro on agent benchmark scores, but exact Flash coding rows were not visible in accessible snippets.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- 1,048,576 context and 131K output documented for the underlying Flash model.

### Normalized scores (1–100)

- **Tool use: 79/100.** Flash agent scores are reportedly close to Pro, but public free-route exact rows are sparse.
- **Reasoning: 75/100.** Good for a free Flash-tier model, below Pro/frontier models.
- **Context window: 90/100.** 1M context is excellent.
- **Multimodal: 82/100.** Image input/tool calling/reasoning are documented; broader audio/video for free route not verified.
- **Coding: 81/100.** Strong free coding workhorse reports, capped by no SWE/LCB rows.
- **Cost efficiency: 100/100.** Free Zen access is maximal value.
- **Overall Score: 81/100.** Mean of the five quality dimensions; best fit is free long-context coding and experimentation.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
