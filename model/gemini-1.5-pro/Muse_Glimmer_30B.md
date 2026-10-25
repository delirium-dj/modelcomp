# Gemini 1.5 Pro — findings by Muse Glimmer 30B

- Source: Google DeepMind / gemini-1.5-pro
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google DeepMind proprietary multimodal large language model with up to 1 million token context window and multimodal inputs. Announced Feb 15 2024 as the most capable model in the Gemini 1.5 family, successor to Gemini 1.0 Pro/Ultra.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-1.5-pro`. Chat Completions API with function calling support.
- **Release / knowledge:** 2024-02-15 announced; 2024-02-15 blog post. Knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-1.5-pro`
- **Context window:** 1,000,000 tokens total, up to 2M early access; research test up to 10M tokens. Verified by Google Blog Feb 15 2024 and Gemini 1.5 technical report.
- **Modalities:** Input text, image, audio, video, PDF; Output text. Reasoning yes, tool calls yes, JSON mode supported.
- **Pricing (as of 2026-10-25):** Paid via Vertex AI / AI Studio. Approx $3.50 / 1M input, $10.50 / 1M output for gemini-1.5-pro-002 tier per public pricing docs; free tier limited via AI Studio. Data usage subject to Google privacy.
- **Architecture:** proprietary, parameter count undisclosed. Mixture-of-experts architecture reported for Gemini 1.5 family.

### Raw benchmarks found

> Sources: Google DeepMind technical report Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context, Feb 15 2024; Wikipedia Gemini language model; Google Blog Our next-generation model: Gemini 1.5.

Agent / tool use:
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: **46.2%** — Google DeepMind technical report, improved from 41.5% in earlier version
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- MMLU: **>80%** — technical report states Gemini 1.0 Ultra, 1.5 Pro, 1.5 Flash all exceed 80%
- BigBench-Hard: **89.2%** — Gemini 1.5 Pro state-of-the-art score cited in technical report
- Hellaswag: **93.3%** — Gemini 1.5 Pro score cited in technical report
- MATH: **67.7%** — improved from 58.5% per technical report Figure 2
- GSM8K: strong improvement over 1.0 Ultra reported, exact % not published in public report

Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found
- HumanEval: no verified public score found in public release; technical report focuses on multimodal long context

Long context:
- Long-document QA on Les Misérables full book: Gemini 1.5 Pro outperforms retrieval-augmented 4k Gemini 1.5 Pro with 78% win rate per auto-rater
- 1H-VideoQA state-of-the-art with 1M context; EgoSchema 70.2% accuracy with 16 frames
- Audio transcription 15-minute video WER 5.5% without segmentation

### Normalized scores (1–100)

- **Tool use: 68/100.** No independent public Terminal-Bench / Tau3 scores published for gemini-1.5-pro; function calling supported in API but public agent benchmarks not disclosed. Capped by lack of verified evidence.
- **Reasoning: 78/100.** GPQA 46.2%, MATH 67.7%, BigBench-Hard 89.2%, Hellaswag 93.3%, MMLU >80%. Strong multimodal reasoning and math gains over 1.0 series. Capped by absence of HLE / CritPt public numbers.
- **Context window: 95/100.** 1M token official window, research up to 10M tokens, demonstrated long-document and video QA gains. No public RULER/GraphWalks score caps at 95.
- **Multimodal: 88/100.** Text/image/audio/video/PDF input, text output, strong multimodal benchmarks MathVista 63.9%, InfographicVQA 81.0%, EgoSchema 72.2% per technical report. Limited independent multimodal leaderboard scores.
- **Coding: 62/100.** No public SWE-bench / LiveCodeBench / HumanEval scores found for this exact ID. Proxies from general reasoning and MATH suggest moderate coding capability. Capped by missing verified coding benchmarks.
- **Cost efficiency: 55/100.** Paid model at ~$3.50/$10.50 per 1M tokens; capable but not free. Efficiency relative to performance is moderate vs newer frontier models.
- **Overall Score: 78.2/100.** Mean of five quality dims (68+78+95+88+62)/5 = 78.2 → 78. Best-fit: strong long-context multimodal reasoning model with excellent context handling, moderate tool/coding evidence.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
