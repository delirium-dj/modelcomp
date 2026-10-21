# MiniMax M2.7 — findings by MiniMax M3.1 Flash

- Source: MiniMax (MiniMax-M2.7), `MiniMaxAI/MiniMax-M2.7`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's March 2026 agentic-coding MoE (228.7B total / 10B active, 204,800 ctx) — the first model "deeply participating in its own evolution", with SWE-bench Pro 56.2%, Terminal-Bench 2.0 57.0%, LiveCodeBench 79.9% and an MLE-Bench Lite average medal rate of 66.6% at $0.30/$1.20 per 1M.
- **Provider / access:** Hugging Face `MiniMaxAI/MiniMax-M2.7` (fp8), MiniMax API (`MiniMax-M2.7`), OpenRouter `minimax/minimax-m2.7` ($0.30/$1.20), Groq, Together, Vercel. **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-03-18** (MiniMax blog, AA, OpenRouter created timestamp); Vals AI lists Mar 17 — conflict noted. Knowledge cutoff not published.
- **IDs:** `MiniMaxAI/MiniMax-M2.7` (HF), `minimax/minimax-m2.7` (OpenRouter, models.dev).
- **Context window:** **204,800** tokens (`max_position_embeddings`) — AA's spec box says 205K while its FAQ says 200K, BenchLM 200K, Vals 197k.
- **Modalities:** text in / text out only.
- **Pricing (as of 2026-10-20):** **$0.30/M in, $1.20/M out, $0.06/M cached** (AA, OpenRouter, BenchLM, models.dev and Vals all agree).
- **Architecture:** MoE `minimax_m2`, 228,689,764,864 total parameters (≈229B), **10B active**, 62 layers, hidden 3072, 256 local experts with 8 active per token, 3 MTP modules, fp8. **Licence note: this checkpoint is NOT Modified-MIT — it ships a non-commercial licence** ("commercial use requires prior written authorization", and must display "Built with MiniMax M2.7"); the M2.5 card is the Modified-MIT one.

### Raw benchmarks found

> Vendor figures from the launch blog and the model's benchmark images, against Vals AI and Artificial Analysis. The Terminal-Bench version gap and the SWE-bench split are both flagged.

Agent / tool use:

- Terminal-Bench 2.0: **57.0%** (vendor, Claude Code scaffold) · Terminal-Bench 2.1: **48.69%** (Vals AI, independent) vs **55.43%** (AA) · Terminal-Bench 4.0: **0%** (AA) · Terminal-Bench Hard: **39.4%** (AA)
- Tau2-bench: **84.8%** (AA) · Tau3-Banking: **9.9%** (AA) · GDPval-AA: **1010.1** (AA) / **1495 Elo** (vendor) · AutomationBench partial: **4.4%** (AA) · APEX-Agents: **10.6%** (AA)
- Toolathlon: **46.3%** (vendor) · MM-ClawBench: **62.7%** (vendor) · ClawEval: **48.7%** (BenchLM) · Bench Tool-Agent-User Evaluation: **67.6%** (BenchLM)
- MLE-Bench Lite (22 OpenAI ML competitions): **66.6%** average medal rate across 3×24 h trials — 3rd behind Opus 4.6 (75.7%) and GPT-5.4 (71.2%), tied with Gemini 3.1 (vendor)

Reasoning / knowledge:

- GPQA Diamond: **87.4%** (AA) / **86.62%** (Vals AI) · HLE (no tools): **29.6%** (AA) / **28.0%** (Z.ai comparison table) · MMLU-Pro: **80.4%** (Vals AI) / **80.8%** (Arcee) · AIME 2026 / AIME 2025: **89.8 / 80.0** (Z.ai table) · AA-LCR: **78.3%** (AA) · CritPt: **0.57%** (AA)
- Artificial Analysis Intelligence Index: **23** (#42/121) · Omniscience Accuracy / Hallucination Rate: **26.8% / 35.6%** (AA) · IFBench: **75.7%** (AA) · output speed **68.5 tok/s**, TTFT 1.45s
- BenchLM composite: **48.15/100**, #111/227

Coding:

- SWE-bench Verified: **73.8%** (Vals AI, #51/88) / **75.4%** (mini-swe-agent-v2) — the vendor publishes no SWE-bench Verified
- SWE-bench Pro: **56.2%** (vendor) · LiveCodeBench: **79.9%** (Vals AI) · Multi-SWE Bench: **52.7%** (vendor) · VIBE-Pro: **55.6%** (vendor) · SWE-Rebench: **51.9%** (BenchLM) · NL2Repo: **39.8%** (vendor) · Vibe Code Bench v1.1: **27.04%** (BenchLM) / **11.93%** (Vals AI) — conflict flagged

Long context:

- No MRCR / RULER measurement published for MiniMax M2.7.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.0 57.0% / 2.1 48.7–55.4%, τ²-bench 84.8%, Toolathlon 46.3%, MM-ClawBench 62.7% and GDPval-AA 1010 are mid-band, capped by APEX-Agents 10.6%, AutomationBench 4.4% and Terminal-Bench 4.0 at 0%.
- **Reasoning: 72/100.** GPQA 86.6–87.4%, MMLU-Pro 80.4%, AIME 89.8% and the 66.6% MLE-Bench medal rate are strong, capped by HLE 28–30%, CritPt 0.57% and an AA Intelligence Index of 23.
- **Context window: 70/100.** 204,800 tokens is the 200K tier and no retrieval measurement was published.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 72/100.** SWE-bench 73.8–75.4% (independent), SWE-bench Pro 56.2%, LiveCodeBench 79.9%, Multi-SWE 52.7% and Vibe Code Bench 11.9–27.0% are solid mid-band coding numbers.
- **Cost efficiency: 92/100.** $0.30/M in and $1.20/M out with a $0.06/M cache read is cheap, though the **non-commercial licence** means the "free" self-host option is not available to commercial users.
- **Overall Score: 58/100.** Mean of the five quality dims = (62 + 72 + 70 + 15 + 72) / 5 = 58.2 → **58**. Best fit: research-and-RL agents (its self-evolution story is genuinely unique) at low cost — with a licence caveat that matters for commercial deployment.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (MiniMax M2.7 launch blog and Hugging Face card/config/licence, Artificial Analysis, BenchLM + Vals AI, models.dev, OpenRouter API, Z.ai comparison tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.1_Flash.md`, using the same headings.
