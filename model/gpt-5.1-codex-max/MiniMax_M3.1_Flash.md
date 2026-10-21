# GPT-5.1 Codex Max — findings by MiniMax M3.1 Flash

- Source: OpenAI (GPT-5.1-Codex-Max), `gpt-5.1-codex-max`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI's November 2025 frontier coding model — the first model natively trained to work across multiple context windows through "compaction", with SWE-bench Verified 77.9% and SWE-Lancer 79.9% on the Responses API at xhigh reasoning; it became the default Codex model and was shut down on 2026-07-23.
- **Provider / access:** OpenAI **Responses API only** (`https://api.openai.com/v1/responses`, model `gpt-5.1-codex-max`; Chat Completions, Batch, Realtime, Assistants, fine-tuning, embeddings and images are not supported), Codex CLI/IDE/cloud/code review, OpenCode Zen `opencode/gpt-5.1-codex-max` (**$1.25/M in, $10.00/M out, $0.125 cached** — the Zen price matches native, unlike `gpt-5.1-codex` at $1.07/$8.50).
- **Release / knowledge:** **2025-11-19** (launch post) — the Codex changelog entry is dated 2025-11-18 and models.dev records 2025-11-13; all three are cited. Knowledge cutoff **2024-09-30**.
- **IDs:** `gpt-5.1-codex-max` (OpenAI / Zen / OpenRouter), `openai/gpt-5.1-codex-max` (OpenRouter).
- **Context window:** **400,000** tokens with **128,000** max output — the folder's "128K total" figure is the *output* cap, not the context (OpenRouter, models.dev, BenchLM and Vals AI all list 400K).
- **Modalities:** text and image input; text out; reasoning effort low/medium/high plus the new **xhigh**; tools: function calling and web search; streaming, structured outputs, prompt caching, image input.
- **Pricing (as of 2026-10-20):** **$1.25/M in, $10.00/M out, $0.125/M cached** (native and Zen).
- **Architecture:** proprietary.

### Raw benchmarks found

> OpenAI's launch appendix: "All evals were run with compaction enabled at Extra High reasoning effort", Terminal-Bench 2.0 in the Laude Institute **Harbor** harness. Vals AI supplies the independent rows.

Agent / tool use:

- Terminal-Bench 2.0: **58.1%** (OpenAI) vs **52.8%** for GPT-5.1-Codex — Vals noted "a slight regression on Terminal-Bench" for the Max build without publishing an absolute number
- Tau2-bench / GDPval-AA / OSWorld / AutomationBench / Toolathlon / MCP-Atlas: **no verified public score found** for this model
- Vals AI (2025-12-04): "+1% on SWE-bench Verified (#4), slight regression on Terminal-Bench; **3× slower** on SWE-bench Verified, **10×** on VibeCodeBench"

Reasoning / knowledge:

- GPQA / HLE / AIME / MMLU-Pro / τ²-bench: **no verified public score found** for Codex Max specifically
- The nearest Artificial Analysis row is `gpt-5-1-codex` (the non-Max sibling, high effort): Intelligence Index **24**, 124.8–125.2 tok/s, TTFT 11.66s, GPQA 85.96%, HLE 25.7%, MMMU-Pro 72.5%, τ² 83.0%, CritPt 5.7%

Coding:

- SWE-bench Verified (n=500): **77.9%** (OpenAI, compaction + xhigh) vs **73.7%** for GPT-5.1-Codex
- SWE-Lancer IC SWE: **79.9%** (OpenAI) vs **66.3%** for GPT-5.1-Codex
- LiveCodeBench: **83.56%** (Vals AI) · Vibe Code Bench v1.1: **22.17%** (Vals AI / BenchLM)

Long context:

- No MRCR / RULER measurement published; the model is built for cross-window "compaction" rather than retrieval benchmarks.

### Normalized scores (1–100)

- **Tool use: 52/100.** Terminal-Bench 2.0 58.1% is mid-band and there is **no** τ², GDPval, OSWorld or MCP-Atlas figure for Codex Max, so the dimension is scored from one row plus a Vals note.
- **Reasoning: 52/100.** No GPQA, HLE, AIME or τ² number was published for this build; the sibling Codex model's AA readings (GPQA 86.0%, HLE 25.7%, II 24) are the closest evidence and are labelled as such rather than borrowed as Codex Max's own.
- **Context window: 76/100.** A 400,000-token window with a 128,000-token output cap — the 200K–500K tier at its top, with no published retrieval test.
- **Multimodal: 65/100.** Text and image input with text out — the "+image in" band.
- **Coding: 78/100.** SWE-bench Verified 77.9%, SWE-Lancer 79.9% and LiveCodeBench 83.6% are strong mid-to-high band coding numbers for a 2025 coding-specialist, capped by Vibe Code Bench 22.2% and Terminal-Bench 2.0 at 58.1%.
- **Cost efficiency: 75/100.** $1.25/M in and $10.00/M out is expensive on output (≈$1.25/$4.25 → ~88; $3/$15 → ~60), and this is the premium Codex tier.
- **Overall Score: 65/100.** Mean of the five quality dims = (52 + 52 + 76 + 65 + 78) / 5 = 64.6 → **65**. Best fit: repo-scale coding with long-horizon compaction — historical only, since the API id was shut down on 2026-07-23 in favour of `gpt-5.6-sol`.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (OpenAI launch post and system card, Codex changelog, API model docs and deprecation page, Artificial Analysis, BenchLM + Vals AI, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Sol.md`, using the same headings.
