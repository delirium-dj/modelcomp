# Gemini 3.1 Flash-Lite — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.1-flash-lite`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite (Google's cheapest/fastest Gemini-3-generation tier)
- **Short description:** A natively multimodal reasoning model built on Gemini 3 Pro, cut down to the high-volume/latency-sensitive tier: 1M-token window, text/image/audio/video input, ~363 tok/s output and Google's lowest 3.x price. At launch Google reported it beating GPT-5 mini and Claude 4.5 Haiku on six of its comparison benchmarks. The 2026-10-05 enrichment pass added an independent SWE-bench Verified run and the launch Arena Elo.
- **Provider / access:** Google — Gemini API / Vertex AI ID `gemini-3.1-flash-lite`; also on AI Studio, the Gemini app and Search AI Overviews. `generateContent` API (docs.cloud.google.com / ai.google.dev).
- **Release / knowledge:** preview 2026-03-03; GA (`gemini-3.1-flash-lite`) 2026-05-07; preview endpoint shut down 2026-05-25 (Google release notes via ai-tldr). Knowledge cutoff January 2025.
- **IDs:** `gemini-3.1-flash-lite` (Google; the `gemini-3.1-flash-lite-preview` ID is retired). Free tier available on AI Studio/Zen with standard rate limits (repo catalog).
- **Context window:** 1,000,000-token input, 64,000-token max output (ai-tldr spec block).
- **Modalities:** text, image, audio, video in; text out. Reasoning yes (built on Gemini 3 Pro); tool calling yes.
- **Pricing (as of 2026-09-18):** $0.25 in / $1.50 out per 1M (standard tier, text/image/video); audio input $0.50/1M; cached input $0.025/1M; context-cache storage $1.00/1M/hr. Note: a 2.5–3.75× list-price increase over 2.5 Flash-Lite's $0.10/$0.40. Free tier available (rate-limited).
- **Architecture:** proprietary, parameters undisclosed ("built on Gemini 3 Pro", natively multimodal reasoning); ~363 tok/s output, ~45% faster generation and ~2.5× shorter TTFT than Gemini 2.5 Flash (Google, via ai-tldr).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau2 / Tau3 / BFCL / Claw / MCP / GDPval / OSWorld: no verified public score found (Google's launch comparisons vs GPT-5 mini and Claude 4.5 Haiku claim the top score on six of its chosen benchmarks, but per-benchmark agent numbers were not published)

Reasoning / knowledge:

- GPQA Diamond: **86.9%**; MMMLU: **88.9%**; HLE: **16%** (Google's published launch set, via ai-tldr)
- MMMU-Pro: **76.8%**; Video-MMMU: **84.8%** (same source — multimodal reasoning evidence)
- LMArena: **Elo 1432** (Google's Flash-Lite launch post, blog.google, published 2026-03-03) — fills the gap the 2026-09-18 pass marked "no verified public score found"
- ARC-AGI / CritPt / AA Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **62.80%** (Mini-SWE-agent harness, $0.11/task — Vals AI leaderboard, page updated 2026-09-01; row attributed to the "Gemini 3.1 Flash Lite Preview" ID, the same model generation whose preview endpoint was retired 2026-05-25 when the GA ID took over) — fills the gap the 2026-09-18 pass marked "no verified public score found"
- LiveCodeBench: **72%** (Google's published launch set, via ai-tldr)
- SWE-Pro / SciCode / Vibe Code Bench: no verified public score found

Long context:

- Window: **1M tokens** in / 64K out; MRCR / RULER / AA-LCR at window length: no verified public score found

### Normalized scores (1–100)

- **Tool use: 60/100.** No published agent-benchmark numbers — scored provisionally on tier positioning (high-volume, latency-sensitive; not an agentic flagship) and the native multimodal-reasoning toolset, capped by the absence of TB/tau evidence.
- **Reasoning: 83/100.** GPQA Diamond 86.9 and MMMLU 88.9 are flagship-adjacent for a Lite tier (HLE 16 is the honest cap), now with a verified Arena Elo of 1432 adding an independent preference signal — a point above the 2026-09-18 score.
- **Context window: 97/100.** 1M-token input at the top tier of this repo; 64K output cap and no measured long-context retrieval score keep it off 100.
- **Multimodal: 88/100.** Text + image + audio + video in with MMMU-Pro 76.8 and Video-MMMU 84.8 — full omni input; text-only output.
- **Coding: 74/100.** The independent SWE-bench Verified 62.80% (Vals AI, mini-swe-agent) is a genuine fill but lands well below the 78 the launch-only LCB 72% implied — it sits just above 2.5 Flash-Lite's measured 31.6/60 band and far below the 3.5 Flash-Lite's 75.0; LiveCodeBench 72% stays strong.
- **Cost efficiency: 93/100.** Free tier plus $0.25/$1.50 with a near-free $0.025 cache rate; docked slightly for being 2.5–3.75× its predecessor's list price.
- **Overall Score: 80.4/100.** Five-dim mean per `RULES.md` (Cost excluded): (60 + 83 + 97 + 88 + 74) / 5 = 402/5 = 80.4. Best fit: the cheapest way to get 3-series reasoning + omni input at scale — ideal for high-volume multimodal processing; the measured SWE-V shows agentic repo work is its weak spot.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (2026-09-18 pass: ai-tldr.dev Gemini 3.1 Flash-Lite page citing Google's model card, Vertex docs and Gemini API release notes, BenchmarkList generational context; 2026-10-05 approved enrichment pass: Vals AI SWE-bench Verified leaderboard via vals.ai/benchmarks/swebench, Arena Elo via Google's 2026-03-03 launch post); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
