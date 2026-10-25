# Neomorph — findings by Muse Glimmer 30B

- **Source:** OpenCode Zen / Neomorph AI (`opencode/neomorph`)
- **Date:** 2026-10-25 (UTC)
- **Overview and scoring methodology:** `../../model-comparison.md`
- **Cross-model signed log:** `../../model-findings.md`

## Model card

- **Name:** Neomorph
- **Short description:** OpenCode Zen experimental specialty model featuring modular sub-network architecture, adaptive routing, and structured-output focus across 64K context.
- **Provider / access:** OpenCode Zen (`opencode/neomorph`), Chat Completions API.
- **Release / knowledge:** 2026 release snapshot; knowledge cutoff early 2026.
- **IDs:** `opencode/neomorph`
- **Context window:** 64,000 tokens total (64K context window; up to 4,096 max output tokens).
- **Modalities:** Text and code in/out; structured formatting and tool calls. No native visual/audio perception.
- **Pricing (as of 2026-10-25):** $0.50 / 1M input tokens, $1.50 / 1M output tokens ($0.05 prompt cache read).
- **Architecture:** Experimental neural transformer architecture with dynamic modular sub-networks.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.0%** — Provider technical notes; also cited as 54% in early synthesis.
- Tau-Bench Retail / Tau3-Banking / Tau2-Bench: **56.0%** — Provider technical notes.
- GDPval-AA: **1,580 Elo** — Provider technical notes.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **57.2%** — Provider technical notes.

Reasoning / knowledge:

- GPQA Diamond: **61.0%** — Provider technical notes.
- Humanity’s Last Exam (HLE): **33.0%** — Provider technical notes.
- LCR / MLCR: **63.0%** — Provider technical notes.
- CritPt: **59.0%** — Provider technical notes.
- Artificial Analysis Intelligence Index: **22** — Provider technical notes; BenchLM overall reported as 65.5 / #135 in alternate rater.
- Omniscience Accuracy / Hallucination Rate: **77.5% / 7.9%** — Provider technical notes.

Coding:

- SWE-bench Verified / SWE-Pro: **45.0%** — Provider technical notes; alternate synthesis lists 32%.
- LiveCodeBench: **39.0%** — Provider technical notes; alternate synthesis lists 18%.
- SciCode / AA-SciCode: **44.0%** — Provider technical notes.
- Vibe Code Bench: **50.0%** — Provider technical notes.

Long context:

- RULER retrieval at 64K bounds: **82.0% accuracy** — Provider technical notes.

### Normalized scores (1–100)

- **Tool use: 65/100.** Moderate function calling and structural CLI interaction evidenced by ~58% on Terminal-Bench and ~56% on Tau-Bench; consistent with experimental tool integration.
- **Reasoning: 64/100.** Capable problem solving with 61% GPQA Diamond and 33% HLE; capped by occasional logical drift and limited HLE ceiling.
- **Context window: 63/100.** Stable 64K context with 82% RULER retrieval; limited by 4,096 max output tokens.
- **Multimodal: 42/100.** Text and code specialized; no native visual/audio perception layers reported.
- **Coding: 60/100.** Decent modular code generation; 45% SWE-bench Verified and 39% LiveCodeBench indicate routine syntax capability with gaps on complex repos.
- **Cost efficiency: 81/100.** Economical pricing at $0.50 / $1.50 per 1M tokens on OpenCode Zen.
- **Overall Score: 59/100.** Arithmetic mean of five quality dimensions: (65 + 64 + 63 + 42 + 60) / 5 = 58.8 → 59. Experimental specialty model designed for structured text outputs and modular sub-network adaptation.

### Evidence / Conflict notes

- Independent public web searches on 2026-10-25 via Bing/Google/DuckDuckGo for `neomorph AI model`, `neomorph opencode zen`, `Terminal-Bench neomorph`, `opencode/neomorph model card` returned no verified public model card pages, benchmark leaderboards, or independent reviews. Results were generic domain search noise or blocked by 429/captcha challenges.
- Existing rater files diverge on several raw numbers:
  - Gemini 3.8 Flash reports Terminal-Bench 58.0%, SWE-bench Verified 45.0%, LiveCodeBench 39.0%, Multimodal 20/100, Context 55/100.
  - Gemini 3.5 Flash Lite reports Terminal-Bench 58.0%, SWE-bench Verified 45.0%, LiveCodeBench 39.0%, Multimodal 64/100, Context 72/100, plus additional metrics Omniscience 77.5%.
  - Early internal synthesis lists Terminal-Bench 54%, SWE-bench Verified 32%, AIME 2024 20%, LiveCodeBench 18%.
- Conflicts appear to stem from different provider note versions and rater interpretation. No independent third-party leaderboard verification located.

### Notes on limitations

- Zero verified public benchmark numbers found beyond provider technical notes cited in existing rater files. No official model card URL, Hugging Face repo, or academic paper located via independent web search.
- Scores are normalized interpretations of provider-reported metrics, not official vendor scores. Multimodal capability is inferred as absent due to modality description.
- Pricing and context limits are taken from OpenCode Zen provider specifications as reported in existing findings; no independent price confirmation.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: Review of existing model files `model/neomorph/Gemini_3.8_Flash.md`, `model/neomorph/Gemini_3.5_Flash_Lite.md`, `model/neomorph/average.md`, `model/neomorph/meta.json`; attempted three independent web searches for official model card / independent benchmarks — no verified public sources located. Scores are normalized 1–100 interpretations based on provider technical notes and cross-rater synthesis.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
