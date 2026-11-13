# Qwen 4 Max - findings by Big Pickle

- Source: Alibaba/Qwen 4 Max
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 4 Max
- **Short description:** Alibaba's Qwen 4-generation flagship, shipped as a limited `qwen4-max-preview` checkpoint (2026-11-11 to 2026-11-25) with a 1M-token window and native image/video understanding. This is a preview endpoint, not a GA SKU; no official benchmark card has been published.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen4-max-preview`, DashScope Chat Completions); Token Plan only during preview. No OpenCode Zen Free ID.
- **Release / knowledge:** Preview released 2026-11-11, retires 2026-11-25; knowledge cutoff not published.
- **IDs:** `alibaba/qwen4-max-preview` (no separate legacy ID)
- **Context window:** 1,048,576 input tokens / 393,216 max output, verified from Alibaba Model Studio preview limits. (The site `meta.json` lists a 2M/128K window; the vendor docs and independent reviewers both report 1M/393,216, which is what is scored here.)
- **Modalities:** Text, image and video in; text out. Thinking mode, streaming and tool calling are exposed through the DashScope API; audio input was not confirmed for the preview.
- **Pricing (as of 2026-11-13):** No per-token list price is published for the preview — access is bundled into Alibaba's Token Plan. Paid GA pricing is expected to be premium (third-party estimates cluster around $2.50/$10 per 1M), but nothing is verified.
- **Architecture:** Proprietary hosted MoE; no parameter counts, weights or license published for the Max tier.

### Raw benchmarks found

> Alibaba published no benchmark card for `qwen4-max-preview`. The only measured
> results come from StealthMark's independent game-style suite (hard reasoning,
> planning and visual tasks). They are reported as-is; no vendor-proxy numbers
> are invented here.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- StealthMark composite: **58.8 / 100**, rank **12 of 58** (General 54.6, Visual 66.3, Foresight 57.5, Latch 67.3) — independent hard-reasoning/planning/visual game suite, not a standard academic harness
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- StealthMark SVG tasks: **48.8–78.4** across scenes; output speed **66 tok/s** (StealthMark harness)

Long context:

- No MRCR / RULER / GraphWalks curve at 1M; the window is a serving spec only. StealthMark's Latch (67.3) is the closest long-horizon proxy.

### Normalized scores (1-100)

- **Tool use: 74/100.** No agentic coding or tool-calling harness exists for the preview; planning sub-scores (Foresight 57.5, Latch 67.3) suggest competent but unproven tool use, which caps the score.
- **Reasoning: 78/100.** StealthMark composite 58.8 with rank 12/58 — upper-quartile against a suite whose leaders sit in the low 60s — maps to a high-70s normalized reasoning score; no GPQA/HLE to confirm.
- **Context window: 97/100.** Verified 1M-token input window lands in the 1M tier; the lack of retrieval-at-length evidence keeps it short of 100.
- **Multimodal: 88/100.** Native image and video input with text output, and Visual 66.3 is the model's strongest StealthMark sub-score; no audio and no MMMU-style benchmark.
- **Coding: 74/100.** SVG task spread of 48.8–78.4 shows real but uneven generative coding; no SWE-bench/DeepSWE result, so the score stays mid-70s.
- **Cost efficiency: 50/100.** Provisional: the preview has no published token price (Token Plan only) and GA is expected premium; a mid-tier 50 reflects that uncertainty rather than a measured rate.
- **Overall Score: 82/100.** Half-up mean of (74 + 78 + 97 + 88 + 74) / 5 = 82.2. Best fit: long-context multimodal analysis and visual planning during the preview window — not a production SKU until GA pricing lands.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-11-13
- Method: public internet research (Alibaba preview docs, StealthMark independent benchmark pages, reviewer teardowns); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [StealthMark — Qwen4-Max-Preview benchmarks and game replays](https://stealthmodels.com/benchmarks/models/qwen4-max-preview)
  - [Stealth Models — Qwen 4 release/spec tracker](https://stealthmodels.com/qwen-4)
  - [eesel — Qwen 4 Max review: preview specs vs docs](https://www.eesel.ai/blog/qwen-4-max-review)
- Future sources: add a new file next to this one, e.g. `Qwen_4_Max.md`, using the same headings.
