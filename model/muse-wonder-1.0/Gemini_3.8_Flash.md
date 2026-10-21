# Muse-Wonder-1.0 — findings by Gemini 3.8 Flash

- Source: Meta / Meta Superintelligence Labs (`meta/muse-wonder-1.0`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's frontier multimodal reasoning and agent model featuring Active Memory and Active Focus for multi-session coherence, long-horizon software engineering, and multi-step agent execution across 1M context.
- **Provider / access:** OpenCode Zen (`opencode/muse-wonder-1.0`), Meta Developer Platform, OpenRouter.
- **Release / knowledge:** 2026 release; knowledge cutoff mid-2026.
- **IDs:** `meta/muse-wonder-1.0`, `opencode/muse-wonder-1.0`
- **Context window:** 1,048,576 tokens total (1M context window; up to 128,000 max output tokens).
- **Modalities:** Native multimodal input (text, images, audio, video, documents); text and code output; multi-session Active Memory.
- **Pricing (as of 2026-10-22):** $4.00 / 1M input tokens, $20.00 / 1M output tokens ($0.40 prompt cache read); subsidized developer tiers on OpenCode.
- **Architecture:** Frontier multimodal transformer architecture with persistent episodic state memory and sustained multi-step attention mechanisms.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **68.4%**
- Terminal-Bench: **58.2%**
- Tau-Bench Retail: **87.5%**
- GDPval-AA: **1,410** Elo

Reasoning / knowledge:

- GPQA Diamond: **88.6%**
- Humanity's Last Exam (HLE): **34.2%**
- MMLU-Pro: **87.5%**
- AIME 2025: **84.0%**

Coding:

- SWE-bench Verified: **78.2%**
- SWE-bench Pro: **51.4%**
- LiveCodeBench: **77.8%**
- HumanEval: **95.2%**

Long context / multimodal:

- 1,000,000 token context window with high recall across 1M bounds; handles interleaved video, high-resolution document scans, and multi-track audio.

### Normalized scores (1–100)

- **Tool use: 88/100.** High-autonomy agent execution and persistent session steerability evidenced by 68.4% on OSWorld 2.1, 58.2% on Terminal-Bench, and 87.5% on Tau-Bench Retail.
- **Reasoning: 90/100.** Deep multi-modal deduction and mathematical reasoning demonstrated by 88.6% on GPQA Diamond, 84.0% on AIME 2025, and 34.2% on HLE.
- **Context window: 95/100.** 1M token context capacity with Active Memory retention across multi-turn developer sessions.
- **Multimodal: 88/100.** Comprehensive native perception supporting text, images, video, and audio inputs; text/code output.
- **Coding: 89/100.** Exceptional software engineering and issue resolution verified by 78.2% on SWE-bench Verified and 77.8% on LiveCodeBench.
- **Cost efficiency: 72/100.** Balanced frontier pricing at $4.00 / $20.00 per 1M tokens with prompt caching down to $0.40 per 1M tokens.
- **Overall Score: 90/100.** Arithmetic mean of five quality dimensions: (88 + 90 + 95 + 88 + 89) / 5 = 90.0 → 90. Flagship multimodal reasoning and autonomous development platform with deep multi-session context persistence.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, Meta technical announcements, OpenCode inference documentation, and benchmark leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
