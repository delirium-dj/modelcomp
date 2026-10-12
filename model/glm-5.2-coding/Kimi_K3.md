# GLM 5.2 Coding — findings by Kimi K3

- Source: Z.AI (Zhipu) / GLM 5.2 Coding (`opencode/glm-5.2-coding`; base weights `zai-org/GLM-5.2`, MIT)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Coding-focused serving of Z.AI's GLM 5.2 open-weights reasoning model (released June 13, 2026, MIT) on OpenCode Zen. GLM 5.2 is a ~754B-class MoE with 1M context that posts SWE-bench Verified 78.7% and τ²-Telecom 99.1%; this entry tracks the coding plan endpoint (Zen deployment listed at 128K total context).
- **Provider / access:** OpenCode Zen `opencode/glm-5.2-coding` (Chat Completions); base model `zhipuai/glm-5.2` live on Zen (OpenCode Data ~#27 weekly); ~30 OpenRouter providers; open weights `zai-org/GLM-5.2` (HF link confirmed live).
- **Release / knowledge:** GLM 5.2 released 2026-06-13 (OpenCode Data confirms benchleader.com's date); knowledge cutoff not published.
- **IDs:** `opencode/glm-5.2-coding` (Zen; no separate Free ID); `zai-org/GLM-5.2` (weights).
- **Context window:** 1M native (benchleader.com measured; OpenCode Data confirms) / 131K max output (OpenCode Data — new this pass); **Zen coding deployment listed at 128K total**.
- **Modalities:** text in/out (Zen listing; catalog confirms text-only input); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $1.40/M input, $4.40/M output, $0.26 cached input, $0.00 cache write (OpenCode Data catalog — verified now; matches benchleader's provider table; DeepInfra fp4 floor ~$0.56/$1.80).
- **Architecture:** open-weight MoE (glm_moe_dsa; ~754B-class per community metadata), MIT license (HF link confirmed).

### Raw benchmarks found (max reasoning-effort configuration, via benchleader.com aggregates of AA/Epoch/Vals/LiveBench + official z.ai/blog/glm-5.2)

Agent / tool use:

- τ²-Bench Telecom (AA): **99.1%** (#1); τ²-Bench Banking (AA): **34.6%** (benchleader/AA)
- Terminal-Bench: **82.7% / 81%** (official z.ai blog rows via OpenCode Data — slightly above the AA 77.9% I recorded first-pass; Vals: 67.8%); Terminal-Bench Hard: **50.8%** (AA)
- MCP Atlas: **77.8%** (#15) (Scale SEAL via benchleader); official blog row: **76.8%** — consistent
- Tool-Decathlon: **48.2** (official z.ai blog — new this pass)
- GDPval (AA): **42.9%** (benchleader)
- LMArena Agent: **rank #4** (benchleader)
- APEX-Agents (AA): **33.7%** (#6); ITBench SRE: **42.7%** (#13) (benchleader)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Epoch, #23); 89.5% (AA); 85.6% (Vals); 71.2% (Epoch, no-reasoning); official z.ai blog: **91.2%** (benchleader + OpenCode Data)
- HLE: **40.5% / 54.7%** (official blog two rows; matches benchleader); SimpleBench: **58.8%**; ARC-AGI-1: **77.0%**; ARC-AGI-2: **22.8%** (benchleader)
- CritPt: **20.9%** (official blog; matches benchleader); AA-LCR: **78.3%** (benchleader)
- AIME: **99.2%** (official blog — CONFLICT with my first-pass MathArena figure 90.0%; different edition/harness, both retained); HMMT: **94.4% / 92.5%** (official blog; closer to my 92.4%); IMOAnswerBench: **91%** (official, new)
- AA Intelligence Index: **33.7** (max effort); LiveBench: **73.2%**; SimpleQA Verified: **34.2%** (benchleader)
- AA-Omniscience: **4.4 index** — accuracy 24.3%, non-hallucination 73.7% (benchleader/AA)

Coding:

- SWE-bench Verified (Epoch): **78.7%** (#5 of 33) (benchleader)
- SWE-bench Pro: **62.1%** resolve rate (official z.ai blog via OpenCode Data — new this pass); SWE-bench (Vals): **82.8%**
- FrontierSWE: **74.4** dominance score (official z.ai blog — new); SWE Marathon: **13%** resolve (official, new); PostTrainBench: **34.3** (official, new)
- Vibe Code Bench v1.1: **64.0%**; Code Migration: **37.9%** (Vals via benchleader)
- LiveCodeBench (Vals): **69.5%**; SciCode (AA): **51.2%**; DeepSWE: **43.8%** (benchleader); official DeepSWE: **46.2%** resolve; NL2Repo: **48.9%** (official blog, new)
- Program Bench: **63.7** (official, new)
- LMArena WebDev: **1600** (#21); LMArena Coding: **1510** (#48) (benchleader)
- SWE Atlas: Codebase QnA 48.1% / Refactoring 42.4% / Test Writing 41.5% (Scale SEAL via benchleader)

Long context:

- AA-LCR 78.3% at up to 1M (benchleader); 131K output catalog-verified; no MRCR/RULER row.

Multimodal:

- Text-only per Zen listing and the OpenCode Data catalog (text in/out) — confirmed no vision rows.

### Normalized scores (1–100)

- **Tool use: 84/100.** Unchanged: τ²-Telecom 99.1% (#1), MCP Atlas ~77–78% (official-confirmed), LMArena Agent #4; capped by GDPval 42.9% and weak Tau3-Banking 34.6%.
- **Reasoning: 79/100.** Unchanged: GPQA ~91%, AIME up to 99.2%, HMMT ~94%, LCR 78.3%; capped by ARC-AGI-2 22.8% and Omniscience accuracy 24.3%.
- **Context window: 82/100.** Unchanged: native 1M with AA-LCR 78.3% measured; 131K output now verified; Zen coding endpoint caps at 128K.
- **Multimodal: 15/100.** Unchanged: text-only deployment confirmed by the current catalog — floor.
- **Coding: 83/100.** Unchanged: SWE-bench Verified 78.7% (#5), official SWE-bench Pro 62.1%, FrontierSWE 74.4; capped by DeepSWE ~44–46% and SWE Marathon 13%.
- **Cost efficiency: 80/100.** Verified now: $1.40/$4.40 typical hosted (down to $0.56/$1.80) with MIT open weights.
- **Overall Score: 69/100.** Mean of the five quality dims (84+79+82+15+83)/5 = 68.6 → 69 (unchanged). Best fit: agentic coding on a budget with open-weight portability; multimodal users must look elsewhere (text-only).

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official z.ai/blog/glm-5.2 blog table transcribed by OpenCode Data `zhipuai/glm-5-2` incl. pricing/usage/open-weights; benchleader.com aggregate of AA/Epoch/Vals/LiveBench/LMArena from first pass). Second pass over my 2026-09-24 file: verified release (2026-06-13), pricing, 131K output, text-only modality; added official SWE-Pro/FrontierSWE/SWE-Marathon/PostTrainBench/Tool-Decathlon rows; flagged the AIME edition conflict. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
