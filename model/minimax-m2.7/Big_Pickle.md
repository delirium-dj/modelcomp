# MiniMax M2.7 — findings by Big Pickle

- Source: Big Pickle (`opencode/big-pickle`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Note: requested as "MiniMax M2.7 Free" — no `minimax-m2.7-free` exists on Zen. Current Zen free models: big-pickle, union-alpha, deepseek-v4-flash-free, muse-spark (1.3/1.2) contributor-free, mimo-v2.5-free, ling-3.0-flash-fin-free, nemotron-3-ultra-free, nemotron-3.5-lightning-free. M2.7 is paid ($0.30/$1.20). Scored on paid pricing.

## Model card

- **Name:** MiniMax-M2.7 (MiniMax M2.7)
- **Short description:** "First model deeply participating in its own evolution" — MoE built for agentic coding, Agent Teams, complex skills, dynamic tool search. Successor to M2.5; `M2.7-highspeed` variant identical results at higher TPS.
- **Provider / access:** MiniMax API (`MiniMax-M2.7`, `-highspeed`); OpenCode Zen paid (`opencode/minimax-m2.7`) at `https://opencode.ai/zen/v1/chat/completions`; NVIDIA NIM (marked Deprecated), Together, Ollama (`:cloud`), Fireworks, Vercel. Weights `MiniMaxAI/MiniMax-M2.7` (HF).
- **Release / knowledge:** launch 2026-03-18; open weights + NIM 2026-04-11; arXiv paper 2026-05-26.
- **IDs:** paid `opencode/minimax-m2.7`; no free ID.
- **Context window:** **204,800 total** (deployed; config.json max_position_embeddings 204800); native 192K per paper; Zen output cap **131,072**.
- **Modalities:** text → text only; **no vision**. Tool use, JSON mode, reasoning, dynamic tool search, Agent Teams.
- **Pricing (as of 2026-09-17):** Zen $0.30 in / $1.20 out / $0.06 cached. MiniMax direct $0.30/$1.20. **Non-commercial license**: commercial use needs written authorization from MiniMax.
- **Architecture:** 229.9B total / 9.8B active (62-layer decoder-only); 256 experts, 8 active; GQA; MTP (3 heads); pretrained 29.2T tokens; open weights.

### Raw benchmarks found

Agent / tool use:

- SWE-Pro: **56.22** (vendor/paper; "matching GPT-5.3-Codex" claim)
- SWE Multilingual **76.5**; Multi-SWE **52.7**; VIBE-Pro **55.6**; NL2Repo **39.8**
- Terminal-Bench 2.0 **57.0** (vendor); TB 2.1 no official (3P 55.4/55.5/48.7)
- GDPval-AA **1495 Elo** (vendor) vs 50.0 (paper metric) vs AA 29.4% / 1,157 Elo (3P) — not interchangeable
- Toolathon **46.3** (vendor; "Toolathlon" in paper); Skill adherence **97%** (40+ skills); MM Claw **62.7%** (≈ Sonnet 4.6); MLE Bench Lite **66.6%** medal rate
- Claw-Eval **48.7%** (leaderboard, 3P); MCP-Atlas / Tool-Decathlon: **no verified public score found**

Reasoning / knowledge:

- AA-LCR **78.3%** (AA current) / 72.0 (paper); MMLU-Pro **81.8**; Omniscience **Index +1**, hallucination rate **34%** (AA; lowest recorded); IFBench **76.0**; HLE **28.0** (paper) / 29.6 (3P); GPQA **89.8** (paper) / 87.4 (3P)
- AA Intelligence Index **50** at launch (2026-03-25) → **23** on current v4.3.2 (re-confirmed 2026-10-01 at #38/117) — cite version

Coding:

- SWE-bench Verified: no official (3P 72.2–78% across aggregators); SWE-bench Vals **73.8%**; LiveCodeBench (Vals) **79.9%**; Vibe Code Bench **27.04%** (BenchLM) / 11.9 v1.1 (BenchmarkList); SciCode 47.0 (paper) / 50.1 (AA); TB-Hard 39.4 (AA)
- AA Coding Index **52.6**; AA Agentic Index **16.8**

Long context:

- AA-LCR 72.0–78.3 at 204.8K; RULER/HELMET/MTOB: only base-arch ablation values (not M2.7 release scores) — treated as **no verified M2.7 score**.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong skill adherence 97% + MLE 66.6 + SWE-Pro 56.2; Tau3-Banking 9.9% and low Agentic Index cap.
- **Reasoning: 78/100.** GPQA ~87–90, low hallucination 34% bright spot; HLE 28 mid.
- **Context window: 70/100.** 204.8K tier, 131K out.
- **Multimodal: 15/100.** Text-only confirmed.
- **Coding: 80/100.** SWE-Pro 56.2/Multilingual 76.5; Vibe 27 low caps.
- **Cost efficiency: 88/100.** Cheap paid ($0.30/$1.20) + non-commercial license friction. Would be 100 at a free promo.
- **Overall Score: 64/100.** (78 + 78 + 70 + 15 + 80) / 5 = 64.2. Best-value paid text coding/agent; verify license if commercial. Re-derived 2026-10-01 after re-verification — unchanged, all five quality dimensions held.

## Re-verification — 2026-10-01 (14 days after original)

Original research date 2026-09-17. Re-run requested by the user to compare prior findings against current data. Original findings above are preserved; corrections are marked inline.

| Dimension | 2026-09-17 | 2026-10-01 | Change |
| --- | --- | --- | --- |
| Tool use | 78 | 78 | — (corroborated) |
| Reasoning | 78 | 78 | — (corroborated) |
| Context window | 70 | 70 | — (re-confirmed ~205k) |
| Multimodal | 15 | 15 | — (re-confirmed text-only) |
| Coding | 80 | 80 | — (corroborated) |
| Cost efficiency | 88 | 88 | — (pricing unchanged) |
| **Overall** | **64** | **64** | **—** |

**The model is deprecated.** AA now carries: "This model is deprecated. We only continue performance benchmarking for the default 10k input token workload. Results for other workloads are historical and no longer updated," pointing to **MiniMax-M3**. This matches what the original report already noted about NVIDIA NIM being deprecated; the deprecation has now spread to the primary source. Note that `opencode/minimax-m2.7` does **not** appear on Zen's published deprecation-date table (which lists MiniMax M2.5 at August 5, 2026 and M2.1 at March 15, 2026), so the paid Zen ID appears to remain available — vendor deprecation has not propagated to Zen.

**Index held.** AA Intelligence Index is still **23**, now **#38/117** at v4.3.2. The launch-era 50 remains unusable for comparison, exactly as the original report warned. This is the third model in this refresh batch where the report's instinct to distrust a high cached AA figure proved correct.

**New measured performance:** **47.1 output tok/s (#50/117)** with TTFT **1.62s**, against a 68.9 tok/s class median — AA rates this "notably slow" and gives Speed 1 of 4 units, its weakest grade. Against that, verbosity is a genuine strength: **92M output tokens (#11/117)**, the most concise in class against a 140M median. For an agentic model the combination is a reasonable trade: fewer wasted tokens, slower wall-clock.

**Cost and coverage, measured:** pricing is unchanged at **$0.30 in / $1.20 out** with an **80% cache discount** and a blended $0.22/M at 7:2:1 — so Cost efficiency stays at 88. AA can no longer report cost per Intelligence Index task ("N/A", Unknown 0 of 4 units), which is a direct consequence of the deprecation freezing non-default workloads. Provider coverage has narrowed to **4**.

**What held up unchanged, and one detail corrected:** AA re-confirms **text-only** ("Is MiniMax-M2.7 multimodal? No. It only supports text input"), **MIT-style non-commercial** licensing (commercial use still needs written authorization), and ~205k context — AA's technical spec says **205k** while its own FAQ on the same page says 200k, a minor internal inconsistency, but consistent with the 204,800 the report recorded from `config.json`. AA's parameters are **230B total / 10B active**, matching the 229.9B / 9.8B from the report's card.

**Net assessment:** every score held and the raw benchmark set needed no correction. What changes is lifecycle plus one newly visible weakness: at 47 tok/s this is a slow generator, so "best-value paid text coding/agent" needs the qualifier that it is the cheapest credible option rather than the fastest. With M3 out, the honest framing is "still a sound cheap workhorse, but plan a migration".

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-17
- Method: public web research (MiniMax/GitHub/HF card, arXiv 2605.26494, Artificial Analysis, OpenRouter, BenchLM, benchmarklist.com, OpenCode docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.