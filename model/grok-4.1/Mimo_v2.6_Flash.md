# Grok 4.1 — findings by Mimo v2.6 Flash

- Source: xAI (SpaceXAI) / Grok 4.1
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 (variants: Grok 4.1 Thinking, codename `quasarflux`; Grok 4.1 Non-Thinking, codename `tensor`)
- **Short description:** xAI's Nov 2025 flagship chat model, tuned for style/personality and hallucination reduction (web-search hallucination cut 12.09% → 4.22% per xAI's model card); debuted #1 on LMArena Text. Deprecated/superseded within ~3 months by Grok 4.20, then 4.3/4.5 — a historical snapshot, not a current recommendation (HokAI). Not an alias of Grok 4.1 Fast (a separate, cheaper 2M-context model).
- **Provider / access:** xAI API (Chat Completions; llm-stats provider table: `grok-4.1` at $3.00/$15.00, 256K/8K), grok.com / X / mobile apps; OpenCode Zen entry `grok-4.1` (per tracked Zen metadata). Dedicated xAI docs page retired after newer releases shipped (HokAI).
- **Release / knowledge:** 2025-11-17 (x.ai announcement; BenchLeader/llm-stats track 17–19 Nov 2025). Knowledge cutoff not verified.
- **IDs:** `grok-4.1` / dated snapshot `grok-4.1-2025-11-17` (llm-stats slug). No Free ID: HokAI confirms it never had a free tier; no Zen Free ID verified.
- **Context window:** 256,000 tokens input / 8,000 tokens max output (llm-stats provider table; HokAI).
- **Modalities:** text, image in; text out; reasoning yes (Thinking vs Non-Thinking / effort settings, measured by BenchLeader); tool calls yes (BFCL, τ², Terminal-Bench measured); JSON mode: no verified public statement found.
- **Pricing (as of 2026-09-26):** $3.00 / 1M input, $15.00 / 1M output, blended ~$6.00 / 1M (llm-stats; HokAI) — deprecated historical pricing, no cached-input or batch discount published; paid only.
- **Architecture:** proprietary (xAI); parameter count and dense/MoE architecture undisclosed (HokAI).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (Vals AI via BenchLeader): **24.7%** thinking (#51), 18.0% non-reasoning. Terminal-Bench Hard (AA via BenchLeader): **24.2%** thinking (#142), 14.4% non-reasoning. Terminal-Bench 2.1: no verified public score found.
- τ²-Bench Telecom (AA via BenchLeader): **93.3%** thinking (#44); 63.7% non-reasoning. τ³-Banking: no verified public score found.
- GDPval-AA: no verified public score found.
- BFCL Overall: **69.6%** thinking (#5), 58.3% non-reasoning (#10) (Berkeley Function Calling Leaderboard via BenchLeader).
- Cybench: 39.0% (#6); ITBench SRE (AA): 17.9% (#39); Vending-Bench 2: 1106.6 (#47); Poker Agent (Vals): 1079.2 (#5) — all via BenchLeader.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **85.3%** thinking (AA via BenchLeader, #126) / **84.3%** thinking (Vals AI, #51); 63.7% non-reasoning (AA).
- HLE: **19.3%** (AA via BenchLeader, #188); 5.1% non-reasoning.
- AA-LCR: **74.0%** thinking (#139); 31.3% non-reasoning (Artificial Analysis via BenchLeader).
- CritPt (AA): **2.9%** thinking (#150); 0.0% non-reasoning.
- Artificial Analysis Intelligence Index: **20.4** (#200) at best config; 11.3 (#321) non-reasoning (BenchLeader). BenchLM overall: no verified public score found (BenchmarkList carries only a General Knowledge category row: 90, 94th pct, rank 7/106).
- AA-Omniscience (thinking): accuracy **25.1%**, non-hallucination 26.6%, composite −29.9 (#247).
- MMLU-Pro: **84.2%** thinking (Vals, #64); AIME (Vals): 91.9% thinking (#21); AIME 2026: 94.2% (MathArena, #20); HMMT Feb 2026: 86.4% (#20); SimpleBench: 56.0% (#37); ForecastBench: 61.0% (#18); DTBench: 87.7% (Epoch AI via BenchLeader).

Coding:

- SWE-bench Verified (Vals AI via BenchLeader): **41.4%** thinking (#82). SWE-Pro: no verified public score found.
- LiveCodeBench: **80.6%** thinking (Vals, #64); 42.6% non-reasoning.
- SciCode: no verified public score found.
- Vibe Code Bench v1.1: **1.2%** (Vals, #94).
- LMArena Coding: 1499 Elo (#68); ALE-Bench: 394.9 (#97); Cybench: 39.0% (#6) — via BenchLeader.
- DeepSWE / Coding Index: no verified public score found.

Long context:

- AA-LCR: 74.0% (thinking) long-context reasoning at 256K window; MRCR / RULER: no verified public score found.

Other: MMMU-Pro 63.3% thinking (AA) / 72.7% (Vals); LMArena Vision 1199 (#77); LMArena Text 1465 (launch claim: Thinking #1 at 1483, x.ai); production hallucination on web-search queries 4.22% (x.ai model card).

### Normalized scores (1–100)

- **Tool use: 65/100.** Excellent τ²-Telecom 93.3% and BFCL 69.6% (#5) are dragged down by weak terminal agentic scores (TB2.0 24.7%, TB Hard 24.2%) and a missing GDPval/Claw-Eval row — mid-band overall.
- **Reasoning: 70/100.** GPQA 85.3% and AA-LCR 74.0% are strong, but HLE 19.3%, AA Intelligence Index 20.4 (#200) and Omniscience accuracy 25.1% sit well below frontier — capped in the 70s.
- **Context window: 72/100.** 256K lands in the 200K–500K tier (65–84); 8K max output is a noted caveat, not a separate deduction.
- **Multimodal: 68/100.** Image input + text output only (60–70 band), with MMMU-Pro 63.3–72.7% and LMArena Vision 1199 (#77); no audio/video/PDF input or non-text output.
- **Coding: 68/100.** LiveCodeBench 80.6% and strong LMArena Coding 1499 pull it up, but SWE-bench Verified 41.4%, Vibe v1.1 1.2% and TB2.0 24.7% hold it in the mid band; no SciCode row.
- **Cost efficiency: 60/100.** $3.00/$15.00 per 1M matches the methodology's $3/$15 ≈ 60 reference; never had a free tier (HokAI) and is now deprecated.
- **Overall Score: 69/100.** Half-up mean of Tool 65, Reasoning 70, Context 72, Multimodal 68, Coding 68 = 68.6. Best fit: expressive high-preference chat with solid long-context reasoning; poor value for terminal/SWE agent work at flagship pricing.

---

## Signature

- Provided by: **Mimo v2.6 Flash (Xiaomi/MiMo-V2.6-Flash)** — 2026-09-26
- Method: fresh public web research (x.ai announcement/model card via HokAI, BenchLeader aggregating AA/Vals AI/MathArena/Epoch, BenchmarkList, llm-stats, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

