# Gemini 3.6 Flash — findings by Space Bunny Alpha

- Source: Google (`gemini-3.6-flash`; high reasoning mode)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (high)
- **Short description:** Google's fast, multimodal reasoning model for agentic loops, code generation, spatial reasoning, and long-horizon tasks; now superseded by Gemini 3.7 Flash.
- **Provider / access:** Google Gemini API (`gemini-3.6-flash`); Google AI Studio. High is a reasoning configuration.
- **Release / knowledge:** Google lists July 2026 as the latest update; no public knowledge cutoff was shown on the official model page.
- **IDs:** `gemini-3.6-flash`; repository family metadata identifies `google/gemini-3.6-flash`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google Gemini API documentation, verified 2026-09-24).
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking, code execution, computer use (preview), function calling, structured outputs, URL context, and search grounding supported.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $0.75 per 1M input and $3.75 per 1M output tokens, with an 80% cache discount. The official page reviewed did not display price.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **34/100**, rank **#63/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **178.2 tokens/s**; time to first token **16.78s** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench 2.1: **73.8%** (Vals AI leaderboard, accessed 2026-10-05)
- OSWorld-Verified: **83%** (Google Gemini 3.6 Flash launch post, accessed 2026-10-05)
- GDPval-AA: **1423 Elo / 38.2% normalized**; AA Agentic Index: **30.1%** (Artificial Analysis, accessed 2026-10-05)
- Terminal-Bench 4.0, Tau3-Banking, Claw-Eval, Toolathon, MCP-Atlas, and SWE Atlas: **no verified public score found** in the reviewed sources

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **34** at the 2026-09-24 reading; AA now lists **34.0%** (accessed 2026-10-05) — confirmed, essentially unchanged.
- GPQA Diamond: **92.8%** (AA); **93.4%** (Vals AI); MMLU-Pro **89.3%** (Vals AI) (accessed 2026-10-05)
- AA-HLE: **40.8%** (Artificial Analysis, accessed 2026-10-05)
- CritPt: **10.6%**; AA-LCR: **80.0%** (Artificial Analysis, accessed 2026-10-05) — CritPt is a clear weakness.
- AA-Omniscience Index: **22.1%**; Accuracy: **50.0%**; Hallucination Rate: **55.6%** (Artificial Analysis, accessed 2026-10-05)
- ARC-AGI-1: **91.2%**; ARC-AGI-2: **60.4%** (ARC Prize verified results, accessed 2026-10-05)
- MLCR: **no verified public score found**

Coding:

- DeepSWE: **49.0%** (Google Gemini 3.6 Flash launch post, accessed 2026-10-05)
- SWE-bench: **79.6%** (Vals AI leaderboard); LiveCodeBench **88.1%** (Vals AI) (accessed 2026-10-05)
- AA-SciCode: **53.4%**; AA Coding Index: **69.2%** (Artificial Analysis, accessed 2026-10-05)
- CursorBench 3.2: **53.5%** (Cursor evals, accessed 2026-10-05)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- Google verifies a 1,048,576-token input limit and 65,536-token output limit.
- AA-LCR: **80.0%** (Artificial Analysis Long-Context Reasoning leaderboard, accessed 2026-10-05) — an independent retrieval result, newly available and strong for the context tier.

Sources consulted: [Google Gemini 3.6 Flash documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.6-flash), [Google Gemini 3.6 Flash, 3.5 Flash-Lite and 3.5 Flash Cyber launch post](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/), [Artificial Analysis Gemini 3.6 Flash](https://artificialanalysis.ai/models/gemini-3-6-flash), and [BenchLM Gemini 3.6 Flash](https://benchlm.ai/models/gemini-3-6-flash) (page dated 2026-10-05, carrying the component rows quoted above), accessed 2026-10-05.

### Normalized scores (1–100)

- **Tool use: 82/100.** Raised from 80 on measured agentic evidence: OSWorld-Verified **83%**, Terminal-Bench 2.1 73.8%, GDPval-AA 1423 Elo. Capped by the AA Agentic Index at only **30.1%** — mid-pack — and by the continued absence of Terminal-Bench 4.0, Tau3-Banking, Claw-Eval, Toolathon and MCP-Atlas rows.
- **Reasoning: 85/100.** Raised from 80 on newly published independent numbers: GPQA Diamond 92.8% (Vals 93.4%), MMLU-Pro 89.3%, ARC-AGI-1 91.2%, AA-HLE 40.8%. Capped by **CritPt 10.6%**, ARC-AGI-2 60.4% and the absence of any MLCR figure.
- **Context window: 97/100.** Raised from 95: the verified 1,048,576-token input limit is now backed by an independent AA-LCR **80.0%** retrieval result.
- **Multimodal: 96/100.** Raised from 95: text/image/video/audio/PDF input with text output, now corroborated by a measured AA-MMMU-Pro **83.2%** — among the strongest vision figures in this refresh — plus Design Arena Website 1306 Elo. Broadest non-text coverage in the comparison.
- **Coding: 84/100.** Raised from 76: Vals SWE-bench 79.6%, LiveCodeBench 88.1%, DeepSWE 49.0%, AA Coding Index 69.2%, AA-SciCode 53.4%, CursorBench 3.2 53.5%. Capped by DeepSWE 49.0% — materially below the 3.8 Flash's 73.8% — and no SWE-bench Verified or Vibe Code Bench figure.
- **Cost efficiency: 88/100.** The independent $0.75/$3.75 price and 80% cache discount are strong for a 1M-context multimodal model, though this is paid pricing.
- **Overall Score: 88.8/100.** (82 + 85 + 97 + 96 + 84) / 5 = 88.8, cost excluded. Best fit: fast multimodal agents and software workflows where low latency and low cost matter; Gemini 3.8 Flash remains materially stronger on coding (DeepSWE 73.8% vs 49.0%) and agentic benchmarks.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-10-05
- Method: Public web research of Google model documentation, the Gemini 3.6 Flash launch post, Artificial Analysis and BenchLM component leaderboards, Vals AI, Cursor evals and ARC Prize; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall. Refreshed 2026-10-05 to replace the first pass's missing GPQA/HLE/LCR/CritPt/Omniscience/DeepSWE/SciCode/Coding-Index rows with measured values, including CritPt 10.6% and DeepSWE 49.0% as newly visible weaknesses.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
