# GPT-5.3-Codex — findings by Step 5 Preview

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex (2026-02-05; GPT-5.3-Codex-Spark followed 2026-02-12)
- **Short description:** OpenAI's merge of its two December-2025 flagships into one agentic coding model — GPT-5.2-Codex's frontier coding plus GPT-5.2's reasoning and professional knowledge — ~25% faster than its predecessor and steerable mid-task without losing context. It set industry highs on SWE-Bench Pro (56.8%) and Terminal-Bench 2.0 (77.3%, vs Opus 4.6's 69.9% on the same board), nearly doubled OSWorld-Verified (64.7% vs 38.2%), matched GPT-5.2's 70.9% GDPval win-or-tie rate, and scored 77.6% on cybersecurity CTFs — the first launch OpenAI treated as High-capability in the cybersecurity domain under its Preparedness Framework. Now superseded (still API-available, deprecated as a user-selectable Codex model for ChatGPT sign-in) by the GPT-5.6 generation.
- **Provider / access:** OpenAI API (`gpt-5.3-codex`), Azure, OpenRouter, Vercel AI Gateway; originally paid-ChatGPT Codex surfaces.
- **Release:** 2026-02-05; knowledge cutoff 2025-08-31.
- **Context window:** 400K tokens; max output 128K.
- **Modalities:** Text and image in → text out; reasoning effort low/medium/high/xhigh; function calling, structured outputs.
- **Pricing (as of 2026-10-09):** $1.75/M input, $14.00/M output, $0.175 cache; Fast variant $3.50/$28.00.
- **Speed:** 123.7 tok/s (AA, 2026-10-19 — re-measured up from the 82.7–83 read); p95 TTFT 3.0 s (OpenAI) / 8.23 s (Azure); AA-measured TTFT 50.22 s at xhigh.

### Raw benchmarks found

OpenAI launch table (xhigh; GPT-5.2-Codex / GPT-5.2 in parentheses):

- SWE-Bench Pro (Public): **56.8%** (56.4 / 55.6)
- Terminal-Bench 2.0: **77.3%** (64.0 / 62.2)
- OSWorld-Verified: **64.7%** (38.2 / 37.9)
- GDPval (wins or ties): **70.9%** (matching GPT-5.2)
- Cybersecurity Capture-The-Flag: **77.6%** (67.4 / 67.7)
- SWE-Lancer IC Diamond: **81.4%** (76.0 / 74.6)

Third-party:

- Artificial Analysis: Intelligence Index **32.5–33**; GPQA Diamond **91.5–92.0%**; HLE **40.0–42.5%**; IFBench 75.0–75.4%; τ²-Telecom 86.0%; AA-LCR 74.0–83.3%; CritPt 16.9%; Terminal-Bench Hard 53.0%; AA-Omniscience 52.9% accuracy / 10.8% non-hallucination
- Vals AI: SWE-bench **78.0%**; LiveCodeBench **87.3%**; TB 2.0 64.0%; Vibe Code Bench **61.8%**; IOI 53.8%
- LiveBench: coding 78.2; reasoning 80.2; math 87.8; data analysis 62.7; language 80.1; global 72.8
- SciCode 53.0%; SWE-rebench 58.2%; τ-bench 77.8%
- Design Arena agents: Full Stack 981, Webapps 1,025, Mobile Apps 1,051 Elo; Models Arena code categories 1,149
- BenchLM composite (2026-10-19): **60.53/100** overall, #54 of 956 models, 23 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **33** (estimated, #88/217 — matches the prior 32.5–33), 123.7 tok/s, TTFT 50.22s, $1.75/$14.00 with 90% cache discount (blended $1.87/M), 400k context, text+image, 1 provider, cutoff 2025-08-31 — NOT deprecated on AA
- New independent rows (2026-10-19): SWE-bench Verified **85%** pinned to the system-card run (the file's 78–85% range resolved), AA-MMMU-Pro **78.5%** (first published MMMU for this model — fills the prior gap), Gert Labs **57.47%**, JobBench **33.7%** (weak), Design Arena Website **1164** (OpenRouter), AA-Omniscience hallucination-rate metric **89.2%** (= the 10.8% non-hallucination already on file)

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.0 77.3% (industry high at launch), OSWorld-Verified 64.7% (humans ~72%), τ²-Telecom 86.0%, GDPval 70.9% win-or-tie and CTF 77.6% are frontier-adjacent agentic execution; the independent TB Hard (53.0%) and Vals TB 2.0 (64.0%) runs trim it below the top band.
- **Reasoning: 84/100.** GPQA Diamond 91.5–92.0% and HLE 40.0–42.5% sit inside the frontier band; AA Intelligence Index 32.5–33 and LiveBench reasoning 80.2/math 87.8 confirm it carried GPT-5.2's reasoning into the Codex line without a further jump — it was explicitly not re-optimized for reasoning gains.
- **Context window: 80/100.** 400K is the 200K–500K band (65–84) with AA-LCR 74.0–83.3% — strong retrieval, a quarter of the 1M frontier norm.
- **Multimodal: 66/100.** Text + image in → text out is the 60–70 band; vision powers the OSWorld computer-use result (64.7%) and the third pass added the first published MMMU row — AA-MMMU-Pro 78.5% (2026-10-19) — solid mid-band, but still no video input or non-text output.
- **Coding: 80/100.** SWE-bench Pro 56.8% and SWE-V 78–85%, Terminal-Bench 2.0 77.3%, LiveCodeBench 87.3%, SWE-Lancer 81.4% and SWE-rebench 58.2% — the frontier agentic-coding standard-bearer of February 2026 (beating Opus 4.6 on TB by 5+ points); Vibe Code Bench 61.8% and TB Hard 53.0% mark the gap to the later GPT-5.6 generation.
- **Cost efficiency: 78/100.** $1.75/$14.00 with $0.175 cache maps to the methodology's ~$1.25–3/$4.25–15 ≈ 78–88 range at the expensive end; the Fast variant doubles again. Not the value pick in the Codex line's own history.
- **Overall Score: 78/100.** Best-fit recommendation: the agentic-coding generalist of early 2026 — one model that both writes frontier code (TB 2.0 77.3%) and does GPT-5.2-grade knowledge work (GDPval 70.9%), with real computer use; superseded within months by GPT-5.6 Sol/Astra and expensive per token.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (Index 33 estimated #88/217 — unchanged; 123.7 tok/s, re-measured up from 82.7–83; TTFT 50.22s; not deprecated; 1 provider) and BenchLM (composite 60.53/100, #54/956, 23/644 benchmarks): SWE-bench Verified pinned to the system-card 85%, first published AA-MMMU-Pro 78.5% (fills the prior multimodal gap), Gert Labs 57.47%, JobBench 33.7%, Design Arena 1164, Omniscience hallucination 89.2% — all consistent with the existing Tool use 80 / Reasoning 84 / Context 80 / Multimodal 66 / Coding 80 reads, no score change. Second-pass verification (2026-10-10) re-checked the OpenAI launch table + system card, Artificial Analysis (Index 32.5–33, GPQA 91.5–92.0%, HLE 40.0–42.5%, AA-LCR 74.0–83.3%, TB Hard 53.0%) and Vals AI (SWE-bench 78.0%, LiveCodeBench 87.3%, Vibe Code Bench 61.8%) — same conclusion. Prior pass (2026-10-09) used OpenAI launch post + system card + API docs, Artificial Analysis and Vals AI via OpenRouter/SWEN/llmreference, DataCamp analysis.
- Future sources: add a new file next to this one, e.g. `GPT_5_6_Sol.md`, using the same headings.
