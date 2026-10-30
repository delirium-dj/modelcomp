# DeepSeek V4.1 Flash 1017 — findings by GLM 5.3 Flash

- Source: DeepSeek (`deepseek-ai/DeepSeek-V4.1-Flash-1017`; API id `deepseek-flash`)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** A 2026-10-17 post-training checkpoint of DeepSeek-V4.1-Flash (released 2026-09-10) — same 552B-backbone MoE, further RL-trained on building complete projects, improving all 11 benchmarks in DeepSeek's own table while cutting task time and output length ("a Pareto improvement in performance and cost"). Open weights under MIT; the current open-weights agentic-coding leader in its class.
- **Provider / access:** DeepSeek first-party API (`api.deepseek.com`, id `deepseek-flash`, Chat Completions + Responses-style via deepseek-recipe toolkit), website and app; open weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash-1017`) and ModelScope; served by DeepInfra, Novita and other inference providers; optimized for DeepSeek Harness v0.2.1-rc.1+, Tencent CodeBuddy, WorkBuddy. New server-side Search & Fetch APIs at $0.75 per 1,000 requests (free until 2026-10-31 16:00 UTC).
- **Release / knowledge:** 2026-10-17 release; knowledge cutoff not stated in the sources found (V4.1 tech report covers the base).
- **IDs:** `deepseek-flash` (first-party API), `deepseek-ai/DeepSeek-V4.1-Flash-1017` (HF/ModelScope) — no Free ID exists on Zen
- **Context window:** 1M tokens native; recommended max_tokens ≥256K (HF card); 384K max output listed by Vals for the V4.1 Flash lineage. Verified via HF model card + Vals/Requesty.
- **Modalities:** image + text input (image-text-to-text; native vision encoder + multimodal aligner), text output; thinking and non-thinking modes; numeric reasoning-effort tiers; tool calling; structured JSON output; prompt caching. No audio/video input documented.
- **Pricing (as of 2026-10-29):** unchanged from V4.1 Flash — $0.30/M input peak ($0.15 off-peak), cache hits $0.006 peak / $0.003 off-peak, $1.20/M output peak ($0.60 off-peak). Open weights = free self-host. No data-usage caveat (MIT, self-hostable).
- **Architecture:** open-weights MoE, 552B backbone parameters (MLX card; HF safetensors index totals 763B including two ~95 GiB Engram n-gram tables, vision encoder, multimodal aligner and DSpark MTP), Causal Encoder-Decoder layout, Compressed Sparse Attention 2 (CSA2), Engram conditional memory, DSpark speculative decoding. MIT license. Active-parameter count not disclosed in sources found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **42.3%** (official card, Claude Code harness; prev checkpoint 31.2; beats GLM-5.3 37.9 and GPT-5.6 Sol 39.9, behind Opus 5's 51.8; HF eval-results + harborframework leaderboard confirm 42.3)
- Terminal-Bench 4.0 (Vals harness): **19.70% ±1.75** (vals.ai, own harness — harness conflict, cited per source)
- Automation-Bench v1.0.6: **60.5%** (official card — #1 of its table, ahead of Opus 5's 50.3)
- Agents' Last Exam: **35.4%** (official card — #1 of its table; prev 31.8)
- Apex Bench v1.1: **72.1%** (official card — #1 of its table; prev 64.6)
- GDPval-AA v2.1: **1746 Elo** (Artificial Analysis; +146 over V4.1 Flash's 1600)
- AA-Briefcase v1.1: **1570 Elo** (AA; +150 over 1420)
- Vals SkillsBench: 69.80% (#1/35) and SWE-bench Multimodal 46.46% — measured on the September V4.1-Flash base by Vals (pre-1017 lineage data, labeled)
- Tau3-Banking / Tau2-Bench: no verified public score found for 1017
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE without tools: **42.6% (44.0% text-only subset)** (official card; prev 36.8/39.1†; HF eval hub confirms both)
- HLE main lane: **43.3%** (Wikipedia HLE table, labeled DeepSeek-V4.1-Flash-1017 — consistent with the official w/o-tools figure)
- Artificial Analysis Intelligence Index: **45 at max** (AA announcement, 2026-10-19, v4.3.2; +6 over V4.1 Flash's 39; equal-#2 open-weights DeepSeek release; Requesty lists 45.1%). Note: AA's models/creators page currently prints 32 for the same checkpoint — unresolved lane/version discrepancy on AA's own surface; the dedicated announcement (45) is used as primary.
- AA-Omniscience: Index **−5 → +5**, accuracy 43% → 46% (AA; knowledge remains the weak spot vs Opus 5.5's 46-point Omniscience score)
- SciCode: **55.9%** (DeepInfra/Requesty benchmark listing)
- GPQA Diamond: no verified public score found for 1017 specifically (predecessor V4.1 Flash: 90.9 official)
- GDP.pdf / CritPt / AA-LCR: no individual public values found

Coding:

- DeepSWE v1.1: **77.0%** (official card, Mini-SWE-V2 harness — #1 of its table, ahead of Opus 5's 74.0 and GPT-5.6 Sol's 73.0)
- NL2Repo-Bench: **68.2%** (official card; prev 65.4; Opus 5 leads at 75.3)
- ProgramBench: **29.1%** (official card; prev 20.3; well behind Opus 5's 37.0 — from-scratch coding stays the weak row)
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: no verified public score found for 1017 (V4.1-Flash base measured 79.0%/91.6% per BetterToken — lineage data only)
- Efficiency: 89K output tokens per Intelligence Index task (AA); AA cost per task $0.60, 179 t/s output speed

Long context:

- 1M native window; no MRCR/RULER retrieval figure published — no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 85/100.** Four #1 rows in the official table (Automation-Bench 60.5, Agents' Last Exam 35.4, Apex 72.1, DeepSWE), GDPval-AA 1746 Elo and AA-Briefcase 1570 sit at the frontier-agentic line (~1750+); capped by Terminal-Bench 4.0 at 42.3% (Opus 5: 51.8) and the weak Vals-harness 19.7% showing harness sensitivity.
- **Reasoning: 76/100.** AA Index 45 (mid-band between the 20–35 → 55–65 and 60+ → 90–100 references) with HLE 42.6–44.0 and SciCode 55.9; AA-Omniscience accuracy 46% and Index +5 keep it well under the knowledge leaders.
- **Context window: 95/100.** Verified 1M native context with ≥256K output support; no published ≥98% retrieval figure at 512K+ keeps it off 100.
- **Multimodal: 72/100.** Native image input with strong measured vision (BabyVision 92.5, Chartography 83.0 w/tools — near Opus 5) but no audio/video/PDF input documented and text-only output.
- **Coding: 85/100.** DeepSWE v1.1 77.0% is the best number in its own comparison table (open-weights agentic-coding lead, per r/LocalLLaMA "leads open-weight") and NL2Repo 68.2 is strong; ProgramBench 29.1 and Terminal-Bench 4.0 42.3 cap it below the Anthropic/Meta long-horizon specialists.
- **Cost efficiency: 96/100.** $0.30/$1.20 peak ($0.15/$0.60 off-peak, near-free cache hits) at frontier-adjacent quality — roughly 1/12 the per-task cost of Opus 5.5 on AA's index ($0.49–0.60 vs $5.98) — plus free MIT self-hosting.
- **Overall Score: 83/100.** Mean of the five quality dims (85+76+95+72+85)/5 = 82.6 → 83. Best fit: high-volume agentic coding and automation at the lowest cost per task in its class; weak fit for from-scratch program synthesis (ProgramBench 29.1) and knowledge-heavy QA (AA-Omniscience +5).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-29
- Method: public internet research — official HF model card (+ eval hub), DeepSeek API docs/news, DeepSeek X announcement, Artificial Analysis announcement posts, Vals AI, Requesty/DeepInfra, BetterToken, Flowtivity and community coverage; Terminal-Bench harness conflicts (Claude Code vs Vals harness) and the AA 45-vs-32 page discrepancy cited per source. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
