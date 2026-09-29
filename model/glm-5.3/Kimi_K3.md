# GLM-5.3 — findings by Kimi K3

- Source: Z.AI / GLM-5.3 (`glm-5.3`; open weights `zai-org/GLM-5.3`, custom GLM-5.3 License)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 (flagship)
- **Short description:** Z.AI's flagship open-weight reasoning MoE (744B total / 40B active; HF metadata lists 753B) built on the same base as GLM-5.2 — all gains from post-training. Open-source SOTA on Terminal-Bench 3.0 and CyberGym vulnerability discovery; emergent cyber exploitation capability triggered a two-week safety hold before weights release.
- **Provider / access:** Z.AI API (`glm-5.3`); OpenCode Zen paid `opencode/glm-5.3`; open weights HF `zai-org/GLM-5.3`; GLM Coding Plan (from $18/mo) includes GLM-5.3.
- **Release / knowledge:** API launch 2026-08-14 (z.ai/blog/glm-5.3); open weights 2026-08-28 after safety review (HF card; llms.blog). Technical report arXiv 2602.15763. Knowledge cutoff not verified.
- **IDs:** `glm-5.3` (Z.AI API); `opencode/glm-5.3` (Zen paid); `zai-org/GLM-5.3` (weights). No free Zen ID for the flagship (the `glm-5.3-free` sibling entry is a separate promotional listing).
- **Context window:** 1M (vendor eval footnotes run FrontierSWE / SWE-Marathon / NL2Repo / ALE-CLI at 1M; pi.dev lists Zen deployment at 1,000,000 tokens with 128K max output). Note: the z.ai launch blog spec card lists "Context Window 200K" — likely the default API-plan cap; not fully reconciled.
- **Modalities:** text in/out; reasoning yes (`reasoning_effort` low/high/max, default max); tool calls; JSON structured output; context caching; MCP.
- **Pricing (as of 2026-09-29):** $1.40 in / $4.40 out per 1M tokens, cached read $0.26 (felloai 2026-09-29; matches Zen listing); open weights free to run under custom GLM-5.3 License (commercial restrictions for hyperscalers — unlike GLM-5.2/5.1's MIT).
- **Architecture:** open-weight MoE (glm_moe_dsa), sparse attention; ~744B total / 40B active (z.ai blog; HF model size field 753B); BF16/FP8 weights; SGLang/vLLM/Transformers/KTransformers support.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2**; Terminal-Bench 3.0: **28.3** (open-source SOTA; harness: Claude Code 2.1.207, max effort) (HF card / docs.z.ai release notes)
- CyberGym: **84.5** (vendor, SOTA for vulnerability discovery, 1,507 tasks, Pass@1) (HF card)
- ExploitGym: **105 (2h) / 130 (6h)** vs GLM-5.2 29/39 — "more than doubles GLM-5.2" (HF card)
- ExploitBench: **54.4** (HF card); SecCodePLT+: **64.3**; CVE-Bench: **24.2** (z.ai blog)
- Toolathlon Verified: **73.0**; AutomationBench v1.0.6: **48.2**; Agents' Last Exam (ALE-CLI): **28.5**; MCP-Universe: **53.3**; APEX-Agents: **78.6** (HF card / z.ai blog)
- GDPval-AA v2: **1769 Elo** — top of the vendor's comparison table (Artificial Analysis via HF card)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE w/ tools: **62.5** (vendor; 300K-context eval with context management, GPT-5.6-luna judge) (HF card)
- Artificial Analysis Intelligence Index: **~44.8** (benchlm.ai aggregation; AA v-series) — roughly #2 among open-weights
- BenchLM overall: **65.4–65.6/100, #29 of 209** (benchlm.ai, September 2026)
- GPQA Diamond / HLE (tools-off) / MMLU-Pro: no freshly verified public score found in this pass

Coding:

- SWE-bench Verified: **80.2**; SWE-bench Pro: **51.6**; SWE-Perf-Java: **66.2** (#1 open) (z.ai blog)
- FrontierSWE: **78.1** (Proximal eval, 1M context); DeepSWE v1.1: **66.9**; NL2Repo: **58.0**; SWE-Marathon v1.1: **42.5**; ProgramBench (Almost Solved): **19.0**; PostTrainBench: **39.8** (HF card)
- Z.ai Code Bench v1.0: **27.1** (max effort on Claude Code 2.1.207) — +50% over GLM-5.2 per vendor (z.ai blog / docs.z.ai release notes)

Long context:

- 1M-window evals: FrontierSWE 78.1, SWE-Marathon 42.5, NL2Repo 58.0, ALE-CLI 28.5 run at 1M (HF footnotes); HLE w/ tools used 300K with context management. MRCR/RULER: no verified public score found.

Multimodal:

- Text-only model (Design Arena Website ~1312–1341 Elo is text-driven web design; GLM-5.3-Flash is the natively multimodal sibling). Vision/audio rows: none.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 88.2, Toolathlon 73.0, GDPval-AA v2 1769 (table-best), CyberGym 84.5 SOTA, APEX-Agents 78.6; capped by TB 3.0 28.3 and AutomationBench 48.2.
- **Reasoning: 82/100.** AA Index ~44.8 (open-weights #2) anchors the band; HLE w/ tools 62.5 is strong; standalone GPQA/HLE not freshly verified in this pass.
- **Context window: 95/100.** 1M-native class: vendor runs FrontierSWE/SWE-Marathon/NL2Repo at 1M and Zen serves 1M with 128K output; held at band floor by the unresolved 200K blog-card listing and missing MRCR/RULER rows.
- **Multimodal: 15/100.** Text-only entry — floor (vision lives in GLM-5.3-Flash).
- **Coding: 85/100.** SWE-bench Verified 80.2, SWE-Perf-Java 66.2 #1-open, FrontierSWE 78.1, DeepSWE 66.9; capped by SWE-bench Pro 51.6 and ProgramBench 19.0.
- **Cost efficiency: 86/100.** $1.40/$4.40 per 1M with $0.26 cached reads (felloai/Zen) plus download-and-run open weights; custom license (not MIT) trims hyperscaler freedom.
- **Overall Score: 73/100.** Mean of the five quality dims (88+82+95+15+85)/5 = 73.0 → 73. Best fit: open-weight agentic+cyber flagship with 1M context at sub-$2 input rates; text-only is the main structural gap.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (z.ai/blog/glm-5.3, huggingface.co/zai-org/GLM-5.3 card + eval footnotes, docs.z.ai release notes, felloai 2026-09-29 pricing); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: confirmed 2026-08-14 API / 2026-08-28 weights release dates and custom (non-MIT) GLM-5.3 License; added verified $1.40/$4.40 pricing; replaced benchlm-only numbers (SWE-bench "Vals" 95.4, Tau3-Banking 50.3, MLCR/CritPt/Omniscience) with vendor-official table; context corrected to 1M-native class with 200K blog-card conflict flagged; cyber evals (ExploitGym 105/130, ExploitBench 54.4, SecCodePLT+ 64.3) added; Overall 70 → 73.
- Future sources: add a new file next to this one using the same headings.
