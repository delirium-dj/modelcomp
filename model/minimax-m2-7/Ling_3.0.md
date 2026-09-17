# MiniMax M2.7 — findings by Ling 3.0

- Source: Ling 3.0 (`opencode/minimax-m2.7`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Note: requested as "MiniMax M2.7 Free" — no `minimax-m2.7-free` exists on Zen. Current Zen free models: big-pickle, union-alpha, deepseek-v4-flash-free, muse-spark (1.3/1.2) contributor-free, mimo-v2.5-free, ling-3.0-flash-fin-free, nemotron-3-ultra-free, nemotron-3.5-lightning-free. M2.7 is paid ($0.30/$1.20). Scored on paid pricing.

## Model card

- **Name:** MiniMax-M2.7 (MiniMax M2.7)
- **Short description:** "First model deeply participating in its own evolution" — MoE built for agentic coding, Agent Teams, complex skills, dynamic tool search. Successor to M2.5; `M2.7-highspeed` variant identical results at higher TPS.
- **Provider / access:** MiniMax API (`MiniMax-M2.7`, `-highspeed`); OpenCode Zen paid (`opencode/minimax-m2.7`) at `https://opencode.ai/zen/v1/chat/completions`; NVIDIA NIM (marked Deprecated), Together, Ollama (`:cloud`), Fireworks, Vercel gateway. Weights `MiniMaxAI/MiniMax-M2.7` (HF).
- **Release / knowledge:** launch 2026-03-18; open weights + NIM 2026-04-11; arXiv paper 2026-05-26.
- **IDs:** paid `opencode/minimax-m2.7`; no free ID.
- **Context window:** **204,800 total** (deployed; config.json max_position_embeddings 204800); native 192K per paper; Zen output cap **131,072**.
- **Modalities:** text → text only; **no vision**. Tool use, JSON mode, reasoning, dynamic tool search, Agent Teams.
- **Pricing (as of 2026-09-17):** Zen $0.30 in / $1.20 out / $0.06 cached. MiniMax direct $0.30/$1.20. **Non-commercial license**: commercial use needs written authorization from MiniMax.
- **Architecture:** 229.9B total / 9.8B active per token (NVIDIA NIM lists 230B total / 10B active; 228.7B exact count). 62-layer decoder-only Transformer; hidden 3,072; vocab 200,064; **256 fine-grained experts with 8 activated per token**, sigmoid gating + per-expert bias; full attention, **48 Q / 8 KV heads (GQA)**, head_dim 128, RoPE θ=5,000,000; **Multi-Token Prediction** module (**3 MTP heads**, K=3, for speculative decoding); pretrained on **29.2T tokens** (19.9T constant + 9.3T decay phase), context progressively extended to 192K.

### Raw benchmarks found

Agent / tool use:

- SWE-Pro: **56.22** (vendor/paper; "matching GPT-5.3-Codex" claim).
- SWE Multilingual **76.5**; Multi-SWE **52.7**; VIBE-Pro **55.6**; NL2Repo **39.8**.
- Terminal-Bench 2.0 **57.0** (vendor); TB 2.1 no official (3P 55.4/55.5/48.7).
- GDPval-AA **1495 Elo** (vendor) vs 50.0 (paper metric) vs AA 29.4% / 1,157 Elo (3P) — not interchangeable.
- Toolathon **46.3** (vendor); Skill adherence **97%** (40+ skills); MM Claw **62.7%** (≈ Sonnet 4.6); MLE Bench Lite **66.6%** medal rate.
- Claw-Eval **48.7%** (leaderboard, 3P); MCP-Atlas / Tool-Decathlon: **no verified public score found**.

Reasoning / knowledge:

- AA-LCR **78.3%** (AA current) / 72.0 (paper); MMLU-Pro **81.8**; Omniscience **Index +1**, hallucination rate **34%** (AA; lowest recorded); IFBench **76.0**; HLE **28.0** (paper) / 29.6 (3P); GPQA **89.8** (paper) / 87.4 (3P).
- AA Intelligence Index **50** at launch (2026-03-25) → **23** on current v4.3 — cite version.

Coding:

- SWE-bench Verified: no official (3P 72.2–78% across aggregators); SWE-bench Vals **73.8%**; LiveCodeBench (Vals) **79.9%**; Vibe Code Bench **27.04%** (BenchLM) / 11.9 v1.1 (BenchmarkList); SciCode 47.0 (paper) / 50.1 (AA); TB-Hard 39.4 (AA).
- AA Coding Index **52.6**; AA Agentic Index **16.8**.

Long context:

- AA-LCR 72.0–78.3 at 204.8K; RULER/HELMET/MTOB: only base-architecture ablation values (not M2.7 release scores) — treated as **no verified M2.7 score**.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong skill adherence 97% + MLE 66.6 + SWE-Pro 56.2; τ³-Banking 9.9% and low Agentic Index cap.
- **Reasoning: 78/100.** GPQA ~87–90, low hallucination 34% bright spot; HLE 28 mid.
- **Context window: 70/100.** 204.8K tier, 131K out.
- **Multimodal: 15/100.** Text-only confirmed.
- **Coding: 80/100.** SWE-Pro 56.2/Multilingual 76.5; Vibe 27 low caps.
- **Cost efficiency: 88/100.** Cheap paid ($0.30/$1.20) + non-commercial license friction. Would be 100 at a free promo.
- **Overall Score: 68/100.** Best-value paid text coding/agent; verify license if commercial.

---

## Signature

- Provided by: **Ling 3.0 (`opencode/minimax-m2.7`)** — 2026-09-17
- Method: public web research (MiniMax/GitHub/HF card, arXiv 2605.26494, Artificial Analysis, OpenRouter, BenchLM, benchmarklist.com, OpenCode docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/Ling_3.0.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
