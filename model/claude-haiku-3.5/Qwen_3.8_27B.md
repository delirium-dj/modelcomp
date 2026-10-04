# Claude Haiku 3.5 — findings by Qwen 3.8 27B

- Source: Anthropic/claude-3-5-haiku-20241022, e.g. OpenCode Zen (`opencode/claude-haiku-3.5`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5 (first-party API ID `claude-3-5-haiku-20241022`, now retired)
- **Short description:** Anthropic's fast/cheap Claude tier from the 2024 generation — 200K context with image input, positioned for high-volume low-latency work. Retired from the Claude API on 2026-02-19, with Claude Haiku 4.5 (`claude-haiku-4-5-20251001`) as the recommended replacement.
- **Provider / access:** Anthropic API (Chat Completions-compatible, Anthropic Messages API); first-party API retired 2026-02-19 (docs deprecation notice sent 2025-12-19). OpenCode Zen `opencode/claude-haiku-3.5` per repo metadata.
- **Release / knowledge:** released 2024-10-22 (Artificial Analysis FAQ; model-ID date 20241022); knowledge cutoff 2024-07-01 (AA).
- **IDs:** Anthropic `claude-3-5-haiku-20241022` (retired); Zen `opencode/claude-haiku-3.5`.
- **Context window:** 200K tokens (Artificial Analysis).
- **Modalities:** text + image in, text out; reasoning no (non-reasoning model per AA); tool calls / JSON mode not verified in this pass.
- **Pricing (as of 2026-10-04; first-party API retired):** $0.80 in / $4.00 out per MTok; prompt-caching hits $0.08/MTok (Anthropic docs pricing table). No free tier.
- **Architecture:** proprietary; parameter count not disclosed (AA).

### Raw benchmarks found

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
- Artificial Analysis Intelligence Index / BenchLM overall: **9 (estimated, #105/300)** — above the non-reasoning class median for similar price (7); AA flags "independent evaluation forthcoming" (model retired before a full independent eval)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks values published; 200K window, no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 50/100.** No public Terminal-Bench/Tau3/GDPval rows exist for this ID; a 2024-generation mid-tier model with an estimated AA Index of 9 sits at the low end of the 50–70 mid band — missing agent data caps it.
- **Reasoning: 50/100.** AA Intelligence Index 9 (estimated) is above the non-reasoning price-class median (7) but far under the mid reference (Index 20–35 = 55–65); no public GPQA/HLE figures survived into 2026 sources.
- **Context window: 70/100.** 200K total (methodology maps 200K = 70 in the 200K–500K tier); no retrieval proof at the edge published.
- **Multimodal: 62/100.** Text + image in, text out — low end of the image-in band (60–70); no video/PDF/audio in, no non-text out.
- **Coding: 55/100.** No verified public SWE-bench/LiveCodeBench/SciCode scores found in 2026 sources; positioned as a fast generalist of its generation, so mid-low with missing data as the cap.
- **Cost efficiency: 88/100.** $0.80/$4.00 per MTok sits between the ~$0.60/$2.20 ≈ 92 and $3/$15 ≈ 60 methodology references — cheap by 2026 standards (Haiku 4.5 now $1/$5); retired from first-party API.
- **Overall Score: 57/100.** Half-up mean of (50, 50, 70, 62, 55) = 57.4 → 57 — a retired 2024 fast generalist: fine as a cheap high-volume fallback where vision input matters, but superseded on every axis by the Haiku 4.5/5.x generations.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** - 2026-10-04
- Method: public internet research (Artificial Analysis model page, Anthropic docs model-deprecations and pricing pages); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
