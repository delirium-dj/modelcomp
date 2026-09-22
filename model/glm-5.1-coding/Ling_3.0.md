# GLM 5.1 Coding — findings by Ling 3.0

- Source: Ling 3.0 (`opencode/glm-5.1`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Note: requested as "GLM 5.1 Coding Free" — no `glm-5.1-free` ID exists on Zen. Only `glm-5-free` / `glm-4.7-free` are free GLM IDs. Scored on paid pricing.

## Model card

- **Name:** GLM-5.1 (GLM 5.1 Coding on OpenCode)
- **Short description:** Z.AI's (ex-Zhipu) post-training flagship for long-horizon agentic engineering — sustained optimization over hundreds of rounds/thousands of tool calls, "up to 8h autonomous". "The longer it runs, the better the result" (vendor).
- **Provider / access:** OpenCode Zen paid (`opencode/glm-5.1`) at `https://opencode.ai/zen/v1/chat/completions`; weights `zai-org/GLM-5.1` (HF) / ModelScope, MIT; api.z.ai, BigModel.cn, Ollama Cloud, NVIDIA NIM, OpenRouter, DeepInfra.
- **Release / knowledge:** API/Coding-Plan access 2026-03-26/27; open weights 2026-04-07; NIM 2026-04-15; knowledge cutoff 2025-11 (or Dec 2025 per Benchgen).
- **IDs:** paid `opencode/glm-5.1`; free doesn't exist for 5.1.
- **Context window:** 200K (202,752 arch / 204,800 modeled); max output 128K–131K.
- **Modalities:** text → text only (no vision input). Reasoning and non-reasoning variants.
- **Pricing (as of 2026-09-17):** Z.AI official **$1.40 in / $0.26 cached / $4.40 out**; Zen $1.40/$4.40; OpenRouter/DeepInfra $1.05/$3.50. Coding Plans $48.60–$432/quarter. No free API tier.
- **Architecture:** 754B total (HF/NVIDIA) vs 744B (AA/Lambda) — unflagged discrepancy; ~40B active per token, MoE (DSA/MLA + sparse attention + MTP); MIT.

### Raw benchmarks found

Agent / tool use:

- SWE-Bench Pro: **58.4** (Z.AI self-reported #1; vs GPT-5.4 57.7, Opus 4.6 57.3).
- Terminal-Bench 2.0: **63.5** Terminus-2 / **69.0** best harness (Claude Code); TB 2.1 56.9 (Vals); TB (AA) 61.8.
- NL2Repo **42.7**; CyberGym **68.7**; BrowseComp **68.0 (79.3 w/ context mgmt)**; MCP-Atlas public **71.8**; Tool-Decathlon **40.7**; τ³ **70.6**; Vending Bench 2 **$5,634.41**.
- Claw-Eval **62.3** (BenchLM); ClawEval v2 **83.6%** (1020/1220, rank #13 open-weight); ClawProBench **62.93** (rank #6/57).

Reasoning / knowledge:

- HLE (no tools) **31.0** (w/ tools **52.3**); GPQA **86.2**; AIME 2026 **95.3** (independent Stratix 93.3); IMOAnswerBench 83.8 (actual IMO: no score).
- AA Intelligence Index **26** (current v4.3); earlier releases reported 41, then 32 — cite version.
- AA-LCR **68.0**; BenchGecko avg 70.4 (#49), coding 65.4 (#30), reasoning 62.1 (#45); OTIS 92.2.

Coding:

- SWE-bench Verified: **no verified public score found** (Vals claims "#1 open-weight" but no number).
- LiveBench overall **69.7** (Coding 75.4); AA Coding Index **55.8**; Arena Code Elo **1530** (#3 global, top open-weight); Vibe Code Bench 31.46; SciCode 43.8; JudgeBench Coding 97.6.

Long context:

- AA-LCR 68.0 (long-context reasoning); vendor claims 8h / 6,000+ tool-call endurance; no dedicated LHTB leaderboard score.

### Normalized scores (1–100)

- **Tool use: 80/100.** τ³ 70.6, MCP-Atlas 71.8, ClawEval v2 83.6; long-horizon breadth.
- **Reasoning: 78/100.** GPQA 86.2, HLE-tools 52.3, AIME 95.3; base HLE 31 caps.
- **Context window: 70/100.** 200K tier, 128K out.
- **Multimodal: 15/100.** Text-only.
- **Coding: 85/100.** SWE-Pro 58.4 (self-reported) + Arena 1530 + LLB 75.4 coding — top paid open coding; Vibe 31.5 is low.
- **Cost efficiency: 70/100.** Paid $1.40/$4.40 (no free ID). Would be 100 at a $0 promo.
- **Overall Score: 66/100.** Top paid open long-horizon coding; weights are free (MIT) for self-hosting.

---

## Signature

- Provided by: **Ling 3.0 (`opencode/glm-5.1`)** — 2026-09-17
- Method: public web research (Z.AI/HF model card, Z.AI docs, Artificial Analysis, Vals, BenchLM, Gate News, The Batch); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/Ling_3.0.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
