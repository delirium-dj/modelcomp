# GLM 5.3 Free — findings by Qwen 3.8 27B

- Source: Z.ai/GLM-5.3 (`opencode/glm-5.3-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** Z.AI's flagship open-weights GLM-5.3 MoE optimized for agentic software development, complex reasoning, and multi-step tool execution; free promotional Zen tier of the GLM-5.3 family.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-free` (free tier); Z.AI API (paid tiers).
- **Release / knowledge:** GLM-5.3 generation (2026); GLM-5.3-Flash sibling adopted Kimi Delta Attention per Wikipedia `Kimi (AI)` (Aug 2026); knowledge cutoff not disclosed.
- **IDs:** `opencode/glm-5.3-free` (Free ID available)
- **Context window:** 204K on the free ID (curated meta); AA lists the GLM-5.3 family at 1M.
- **Modalities:** Text in/out
- **Pricing (as of 2026-09-29):** Free OpenCode Zen promotional tier (fast agentic coding + tool calls); paid Z.AI API tiers otherwise.
- **Architecture:** open-weights MoE (flagship GLM-5.3 line; parameter count not disclosed in this research)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: no standalone verified public score found for the free ID (covered inside the AA Index composite below)

Reasoning / knowledge:

- HLE (text-only subset): **42.3%** (Artificial Analysis HLE leaderboard, 2026-09-22 — rank 9 of 14; behind Qwen 3.8 2.4T A95B 42.4 and ahead of DeepSeek-V4-Pro-0813 41.0)
- Artificial Analysis Intelligence Index: **45** (GLM-5.3 max variant, v4.3.2; AA LLM leaderboard 2026-09-29 snapshot — top-5 class, #2 open-weights behind MiMo-V2.6-Pro 46)

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no standalone verified public score found for the free ID (SciCode is inside the AA Index composite)

Long context:

- MRCR / RULER: no verified public score found

### Normalized scores (1–100)

- **Tool use: 82/100.** Flagship built for multi-step agentic execution; AA Index 45 (max variant) is top-5 class on a composite that includes TB 4.0 / GDPval-AA / AutomationBench; no standalone TB/Tau verified for the free ID, which caps it below 90.
- **Reasoning: 88/100.** HLE 42.3% (top-10 on the AA board, frontier 40%+ band) plus AA Index 45; capped because Claude Opus 5.5 (61.4) and GPT-6 Astra (54.7) lead HLE by a wide margin.
- **Context window: 70/100.** The free ID serves 204K (200K–500K band; 200K anchor = 70); the 1M family window is not what this ID delivers.
- **Multimodal: 15/100.** Text in/out only per curated meta.
- **Coding: 84/100.** Open-weights SOTA positioning for agentic software development (curated meta) and AA Index 45 composite includes SciCode; no standalone SWE-bench number verified for the free ID, which keeps it off the 90+ tier.
- **Cost efficiency: 100/100.** $0 during the free Zen promotional tier (limited-time + training-data caveat per methodology).
- **Overall Score: 68/100.** (82 + 88 + 70 + 15 + 84) / 5 = 67.8 → 68 — while the free tier lasts, the strongest zero-cost agentic-coding pick in the dataset; move to paid Z.AI tiers for 1M-context work.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (Artificial Analysis LLM + HLE leaderboards, 2026-09-22/29 snapshots; Wikipedia `Kimi (AI)` for KDA adoption note; curated project meta.json for ID specs); scores are normalized 1–100 interpretations, not official vendor scores.
