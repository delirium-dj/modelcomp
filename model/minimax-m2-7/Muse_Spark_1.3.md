# MiniMax M2.7 — findings by Muse Spark 1.3

- Source: Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Note: requested as `MiniMax M2.7 Free`, but no `minimax-m2.7-free` ID exists on Zen — evaluated as paid `opencode/minimax-m2.7`.

## Model card

- **Name:** MiniMax M2.7 (requested as MiniMax M2.7 Free)
- **Short description:** MiniMax self-improving frontier MoE for agentic coding, multi-agent collaboration, skill orchestration, and office/productivity tasks. Successor to M2.5; M2.7-highspeed 66% faster same quality.
- **Provider / access:** OpenCode Zen paid `opencode/minimax-m2.7` (`https://opencode.ai/zen/v1/chat/completions`). **No `minimax-m2.7-free` ID on Zen as of 2026-09-17.** Native MiniMax API/Token Plan, Groq Enterprise, Vercel AI Gateway, Ollama cloud. HF `MiniMaxAI/MiniMax-M2.7`.
- **Release:** 2026-03-18. 229–230B total, ~10B active, 62-layer MoE (256 experts), 29.2T tokens. MIT, open weights.
- **Context window:** **196,608–204,800 (200K class)** (Groq 196,608/131K out; Vercel 204.8K/131.1K; ref 205K). Use 200K tier.
- **Modalities:** text in/out; tool use, JSON mode, reasoning (interleaved thinking), dynamic tool search, Agent Teams. **No vision/document understanding** per LLMRef.
- **Pricing (verified, not free):** **$0.30 in / $1.20 out / $0.06 cached** (MiniMax/Vercel; OpenRouter $0.279/$1.20). M3 supersedes for 1M/multimodal/computer-use; M2.7 is cheaper text-only route.

### Raw benchmarks found

- SWE-Pro: **56.22%** (≈ Opus best, matches GPT-5.3-Codex); SWE Verified **72.2%** (NVIDIA Table 10); SWE Multilingual **76.5**; Multi SWE **52.7**; VIBE-Pro **55.6%** (≈ Opus 4.6); NL2Repo **39.8%**
- Terminal Bench 2 / 2.1: **57.0%** (vendor) / **55.5%** (NVIDIA Table 10)
- GDPval-AA: **1,495 Elo** (highest open; vs GPT-5.3); Gym GDPVal **47.6%**
- Toolathon **46.3%** (top tier); MM Claw **62.7%** (≈ Sonnet 4.6); Skill adherence **97%** (40 skills >2K tokens); MLE Lite **66.6%** (2nd only to Opus 4.6/GPT-5.4)
- Claw-Eval: MM Claw 62.7% as proxy; **no isolated Claw-Eval Avg/Pass number found**.
- Reasoning: LCR **69.8%** (NVIDIA table); MMLU-Pro 81.9%; Omni Acc 20.5% / Non-Hallu 74.4%; IFBench 74.6%; Z.ai table HLE-col **28.0**, GPQA **87.0**, MCP-Atlas 48.8%, Tool-Decathlon **46.3%**, Tau3-col **67.6%**
- Self-evolution: internal scaffold +30% over 100+ rounds (vendor claim).

### Normalized scores (1–100)

- **Tool use: 80/100.** Toolathon 46.3% + MM Claw 62.7% + 97% skill adherence + dynamic tool search + Agent Teams.
- **Reasoning: 75/100.** LCR 69.8%, GPQA 87%, solid; no HLE/MRCR frontier evidence.
- **Context window: 70/100.** 200K class, 131K out (good out limit).
- **Multimodal: 15/100.** Text-only.
- **Coding: 82/100.** SWE-Pro 56.2% + Verified 72.2% + Multilingual 76.5% + VIBE 55.6%.
- **Cost efficiency: 90/100.** $0.30/$1.20 cheap paid (no $0 ID). Would be 100 at $0.
- **Overall Score: 69/100.** Best-value paid text coding/agent; re-score to ~70–71 if free promo appears (cost 100 → 70.3).

---

## Signature

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
