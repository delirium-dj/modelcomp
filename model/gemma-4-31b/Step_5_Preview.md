# Gemma 4 31B — findings by Step 5 Preview

- Source: Google DeepMind / Gemma 4 31B (`google/gemma-4-31b-it`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (Gemma 4 31B IT)
- **Short description:** Google DeepMind's flagship open-weight dense model (30.7B, Apache 2.0, thinking mode, 550M vision encoder) — the best open model at ≤35B on MMLU-Pro 85.2%, AIME 2026 89.2%, LiveCodeBench v6 80.0% and Codeforces 2150 Elo, running locally in ~20GB at Q4_K_M.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-31B`), Kaggle, Ollama/LM Studio/vLLM/MLX; hosted via Google AI Studio and third-party routers (llm-stats route $0.09/$0.34 per 1M); no OpenCode Zen Free ID needed (weights are free).
- **Release / knowledge:** released 2026-04-02 (DeepMind page, gemma4.online); training data ends January 2025 (gemmai4.com methodology note); a July 2026 weights refresh changed tool calling, the chat template and vision defaults without a new version number.
- **IDs:** `google/gemma-4-31b-it` (API style), `google/gemma-4-31B` (HF).
- **Context window:** 256K (262,144) per llm-stats and gemma4.online (E2B/E4B are the 128K members; 26B A4B and 31B are 256K). The folder's `meta.json` says 128K — sources say 256K for the 31B; the 256K figure is used here.
- **Modalities:** text and image in; text out; thinking mode (built-in, ~+15–25% on math/coding); tool calling; no audio input on the 31B (audio is E2B/E4B/12B only).
- **Pricing (as of 2026-10-21):** Apache 2.0 — free to self-host (~20GB VRAM at Q4_K_M; official QAT 4-bit builds keep quality); hosted routes from $0.09/$0.34 per 1M with $0.05 cache (llm-stats).
- **Architecture:** dense 30.7B instruction-tuned transformer with a 550M-parameter vision encoder; Per-Layer Embeddings on the edge sizes only; EleutherAI lm-eval-harness reproduction by the community.

### Raw benchmarks found

Google Gemma 4 model card + technical report (via gemmai4.com, thinking mode on) + gemma4.online cross-check:

Agent / tool use:

- Tau2 (agentic, average of 3): **76.9%** (Google model card via gemmai4.com; ref: Gemma 3 27B 16.2%, 26B A4B 68.2%, 12B 69.0%)
- IFEval (instruction following): **98.9%** (Google via gemmai4.com)
- IFBench: **76.0%** (Google via gemmai4.com)
- Terminal-Bench / Tau3-Banking / GDPval-AA / OSWorld / Claw-Eval / MCP-Atlas / Toolathlon: no verified public score found

Reasoning / knowledge:

- MMLU Pro: **85.2%** (Google; leads all open-weight models at ≤35B)
- AIME 2026 (no tools): **89.2%** (Google; ref: Gemma 3 27B 20.8%)
- GPQA Diamond: **84.3%** (Google via gemmai4.com)
- BigBench Extra Hard: **74.4%** (Google via gemmai4.com)
- HLE (no tools): **19.5%** / **26.5%** with search (Google via gemmai4.com — the widest gap to hosted frontier models)
- MMMLU (multilingual): **88.4%** (Google via gemmai4.com)
- LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- LiveCodeBench v6: **80.0%** (Google; best-in-class open <35B)
- Codeforces Elo: **2150** (Google via gemmai4.com — matches the folder's claim; ref: Gemma 3 27B 110)
- SciCode: **43.0%** (Google via gemmai4.com) — mid
- SWE-bench Verified / SWE-bench Pro / DeepSWE / Terminal-Bench / Vibe Code Bench: no verified public score found

Long context (at 128K, thinking off):

- RULER: **96.4%** (Google technical report via gemmai4.com; ref: Gemma 3 27B 66.0%)
- LOFT retrieval: **79.5%** (Google technical report)
- GraphWalks (F1): **82.3%** (Google technical report)
- MRCR v2 8-needle: **66.4%** (Google model card)
- MTOB (English→Kalamang): **52.9%** at 128K / **54.3%** at 256K (Google technical report)

Human preference (independent): LMArena text **1453 ± 77**, rank 77 overall (2026-10-02); #3 among open models at launch (April 2026) — larger open models have since passed it.

Multimodal extras (traceability): MMMU Pro 76.9% (1,120 tokens/image budget), MATH-Vision 85.6%, InfographicVQA 92.0%, MedXpertQA MM 61.3%, OmniDocBench 1.5 0.131 (lower-is-better) — all Google model card via gemmai4.com/gemma4.online.

### Normalized scores (1–100)

- **Tool use: 82/100.** Tau2 76.9% (3-domain average) is a respectable frontier-leaning tool-calling result and IFEval 98.9% / IFBench 76.0% show excellent instruction compliance; capped by no Terminal-Bench, Tau3, GDPval, OSWorld, Claw-Eval or MCP-Atlas number in any harness.
- **Reasoning: 84/100.** MMLU-Pro 85.2%, AIME 2026 89.2%, GPQA Diamond 84.3% and BBXH 74.4% are strong for a 31B dense model; capped hard by HLE 19.5% (26.5% with search) — the widest gap to the hosted frontier — and no published CritPt/LCR/Omniscience data.
- **Context window: 80/100.** 256K (262,144) native lands in the 200K–500K tier (65–84); the published retrieval profile is unusually strong for the tier — RULER 96.4%, LOFT 79.5%, GraphWalks 82.3%, MRCR v2 66.4% at 128K — pushing it to the top of the band without ≥512K evidence.
- **Multimodal: 68/100.** Text + image input with text out (image-in tier 60–70) via the 550M vision encoder; MMMU-Pro 76.9%, MATH-Vision 85.6% and InfographicVQA 92.0% are solid; no video/audio input on the 31B and no non-text output.
- **Coding: 78/100.** LiveCodeBench v6 80.0% (best open <35B) and Codeforces 2150 Elo are strong algorithmic-coding evidence; capped by SciCode 43.0% (mid) and zero published SWE-bench / DeepSWE / Terminal-Bench / Vibe Code Bench numbers for this ID.
- **Cost efficiency: 95/100.** Apache 2.0 weights with free self-hosting (~20GB at Q4_K_M, official QAT 4-bit builds) put the floor at $0; the hosted route $0.09/$0.34 (cache $0.05) is near the ~$0.10/$0.20 ≈ 97–99 band.
- **Overall Score: 78/100.** Mean of (82 + 84 + 80 + 68 + 78) / 5 = 78.4 → 78. Best fit: the strongest free/open 31B for local math, algorithmic coding and document vision — run it self-hosted under Apache 2.0 and keep hosted frontier models for HLE-class reasoning and repo-scale agentic coding.

> **Spec note:** the folder's `meta.json` lists "Text in/out only" and a 128K context; every live source checked (Google card/tech report via gemmai4.com, llm-stats, gemma4.online) confirms image input via the 550M vision encoder and a 256K window for the 31B. The verified facts are used here; the curated meta should be corrected by the maintainer.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Google Gemma 4 model card/technical report figures via gemmai4.com and gemma4.online, LMArena standings, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
