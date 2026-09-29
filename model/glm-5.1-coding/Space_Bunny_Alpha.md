# GLM 5.1 Coding — findings by Space Bunny Alpha

- Source: Z.AI (`glm-5.1`; GLM-5.1)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Z.AI's open-weight MoE model for agentic software engineering, long-horizon tasks, tool use, and mathematical/professional work; a flagship claimed to be roughly aligned with Claude Opus 4.6. **Superseded** by GLM-5.2 (June 2026) and GLM-5.3; Z.AI publishes a dedicated "Migrate to GLM-5.2" guide.
- **Provider / access:** Z.AI API (`glm-5.1`, `https://api.z.ai/api/paas/v4/chat/completions`); Hugging Face `zai-org/GLM-5.1`; NVIDIA NIM (`z-ai/glm5.1`). OpenCode Zen route `opencode/glm-5.1` (no free ID found).
- **Release / knowledge:** **April 2026** per Artificial Analysis; NVIDIA NIM lists Hugging Face 2026-04-08, NGC 2026-04-15, Build 2026-04-17. BenchLM lists April 7, 2026. No reliable knowledge cutoff was shown.
- **Supersession / deprecation (NEW on 2026-09-29):** Z.AI's documentation now routes users from GLM-5.1 (and GLM-5, GLM-4.7/4.6/4.5) to **GLM-5.2**, which the vendor calls its strongest coding model to date. GLM-5.2 was released **2026-06-16** and lifts Terminal-Bench 2.1 from **63.5 → 81.0** and SWE-bench Pro from **58.4 → 62.1**, and moves context from 200K to a solid 1M. GLM-5.3 also exists (referenced in Hy4 preview's blind evaluation as a contemporary). The `glm-5.1` API and docs page remain live; no hard shutdown date is published.
- **IDs:** `glm-5.1`; `zai-org/GLM-5.1`; `z-ai/glm5.1` (NVIDIA NIM).
- **Context window:** **200K** (Artificial Analysis v4.3.2: "200k tokens ~300 A4 pages"). BenchLM catalog previously listed 203K and repository metadata 200K–205K; **the AA figure of 200K is now the primary citation**. Maximum output is not independently verified.
- **Modalities:** Text input/output — confirmed by AA (*"Input modality: Supports: text / Output modality: Supports: text"*). Reasoning/thinking (`thinking.type` enabled/disabled) and tool calls supported. No image/video/audio modality is claimed.
- **Pricing (as of 2026-09-29):** AA v4.3.2 reports **$1.28 per 1M input, $4.07 per 1M output, $0.26 per 1M cache-hit** (blended $0.85/1M at 7:2:1); the earlier BenchLM figures of $1.40/$4.40 are the standard (non-discounted) Z.AI list price and still appear on the GLM-5.2 comparison table. No Zen Free ID was found.
- **Architecture:** Open-weight MoE; AA v4.3.2 lists **744B total / 40B active parameters** (the earlier report said ~754B total from Hugging Face metadata — **corrected to 744B** per AA, with 40B active now verified rather than unverified). MIT license, commercial use without restrictions. GLM-5.2 keeps 40B active and adds the IndexShare sparse-attention optimisation plus MTP speculative decoding.

### Raw benchmarks found

Agent / tool use:

- **Artificial Analysis Intelligence Index v4.3.2: 26**, with rows **AA-Briefcase v1.1 = 963 Elo**, **GDPval-AA v2.1 = 1103 Elo**, **AutomationBench-AA = 20%**, **Terminal-Bench 4.0 = 2%**, **τ³-Banking / ITBench-AA / EnterpriseOps-Gym-AA: no verified public exact value found**. The v4.3.2 index is the 10-evaluation composite (AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1), **ceiling 58** (Claude Opus 5.5 adaptive/max). GLM-5.2 (max) scores 34 on the same version, so 26 is mid-pack, not frontier.
- **Performance row (NEW):** output speed **70.4 tokens/s**, TTFT **1.71s**, time-to-first-answer-token **55.55s**, end-to-end response (500 tokens) **62.66s**, time per Index task 554.83s, output tokens per task 41K (27K reasoning), cost per task $1.02 (AA v4.3.2).
- Terminal-Bench 2.0: **63.5%** (Z.AI GLM-5.1 model-card eval metadata; provider exact)
- Terminal-Bench 2.1 (Vals AI): **56.9%** (BenchLM, Vals AI leaderboard)
- MCP Atlas: **71.8%** (Z.AI GLM-5.1 model-card eval metadata)
- BrowseComp: **68%** (BenchLM, provider-exact Z.AI source)
- Claw-Eval: **62.3%** (BenchLM, Claw-Eval leaderboard)
- τ³-Bench: **70.6%** (BenchLM, provider-exact Z.AI source)
- Toolathlon, GDPval-AA (independent), and ClawProBench: **no verified public exact value found**

Reasoning / knowledge:

- **AA v4.3.2 rows: HLE = 30%, GDP.pdf = 8%, CritPt = 5%, AA-Omniscience index = 4, AA-LCR v1.1 = 74%** (long context). SciCode = 45% is the only coding-domain row.
- GPQA Diamond: **86.2%** (Z.AI GLM-5.1 model-card eval metadata)
- GPQA Diamond (Vals AI): **84.5%** (BenchLM, Vals AI leaderboard)
- HLE: **31%** without tools; **52.3%** with tools (Z.AI model-card eval metadata)
- MMLU-Pro (Vals AI): **86.9%** (BenchLM, Vals AI leaderboard)
- AIME 2026: **95.3%** (Z.AI model-card eval metadata)
- LCR/MLCR, hallucination metrics: **no verified public exact value found** (AA-LCR v1.1 at 74% is a long-context-reasoning row, not the medical MLCR suite)

Coding:

- SWE-bench Pro: **58.4%** (Z.AI model-card eval metadata; high reasoning). GLM-5.2 improves this to 62.1.
- SWE-bench (Vals AI): **76.4%** (BenchLM, Vals AI leaderboard)
- LiveCodeBench (Vals AI): **81.4%** (BenchLM, Vals AI leaderboard)
- SWE-Rebench: **62.7%**; NL2Repo: **42.7%** (BenchLM, independent source rows)
- Vibe Code Bench: **31.46%** (BenchLM, Vals AI)
- **AA v4.3.2 Terminal-Bench 4.0 = 2%** — a notably weak row on the current agentic-coding harness, well below the vendor's Terminal-Bench 2.0/2.1 numbers; the gap is a harness-generation effect and is treated as a caution, not a contradiction.
- DeepSWE, SciCode (vendor-exact), and exact SWE-bench Verified: **no verified public exact value found**

Long context:

- Context capacity: **200K** (AA v4.3.2, corroborated by BenchLM). **AA-LCR v1.1 = 74%** is a new long-context-reasoning row (the v4.3.2 index component); a pure retrieval-at-length MRCR/RULER score is still not published.

Sources consulted: [Artificial Analysis GLM-5.2 vs GLM-5.1 comparison](https://artificialanalysis.ai/models/comparisons/glm-5-2-vs-glm-5-1) (read on **Intelligence Index v4.3.2**), [Z.AI GLM-5.1 docs](https://docs.z.ai/guides/llm/glm-5.1), the [Z.AI Migrate to GLM-5.2 guide](https://docs.z.ai/guides/overview/migrate-to-glm-new), the [GLM-5.2 launch post](https://z.ai/blog/glm-5.2), [Z.AI GLM-5.1 Hugging Face model card](https://huggingface.co/zai-org/GLM-5.1), [BenchLM GLM-5.1](https://benchlm.ai/models/glm-5-1), and [NVIDIA NIM z-ai/glm5.1](https://docs.api.nvidia.com/nim/re/reference/z-ai-glm5.1), accessed 2026-09-29. Provider-exact, Vals AI, and AA rows are labeled separately.

### Normalized scores (1–100)

- **Tool use: 82/100** *(unchanged)*. Terminal-Bench 63.5%, MCP Atlas 71.8%, BrowseComp 68%, and Claw-Eval 62.3% provide solid agent evidence, now joined by AA-Briefcase 963 and GDPval-AA 1103. Held flat rather than raised: **AA Terminal-Bench 4.0 = 2% and AutomationBench-AA = 20%** are weak on the current harness, and Toolathlon / independent GDPval rows are still missing.
- **Reasoning: 85/100** *(unchanged)*. GPQA 86.2%, MMLU-Pro 86.9% and AIME 95.3% are strong. The new **AA v4.3.2 = 26** with HLE 30%, GDP.pdf 8% and CritPt 5% confirms a real ceiling well below the 58 frontier, and the missing MLCR/LCR row still tempers confidence — but nothing moved enough to change the band, so the score is held.
- **Context window: 70/100** *(unchanged)*. The 200K window is now sourced directly from AA v4.3.2 (previously a 203K BenchLM figure with 200K–205K ambiguity), which lands in the same 200K–500K tier. The new AA-LCR v1.1 = 74% is long-context *reasoning*, not a retrieval-at-length test, so it does not lift the score.
- **Multimodal: 15/100** *(unchanged)*. AA explicitly records text-only input and output, matching the official chat template; no image/video/audio support is claimed.
- **Coding: 80/100** *(unchanged)*. SWE-Pro 58.4%, SWE Vals 76.4% and LiveCodeBench Vals 81.4% support solid coding. Held rather than raised because **AA Terminal-Bench 4.0 = 2%** is the current-generation agentic-coding row and GLM-5.2 already beats this model 81.0 vs 63.5 on Terminal-Bench 2.1, confirming GLM-5.1 as a superseded coding position.
- **Cost efficiency: 74/100** *(was 72)*. Revised pricing is **$1.28 in / $4.07 out / $0.26 cache-hit** (blended $0.85/1M), slightly below the $1.40/$4.40 previously scored, and it is the cheaper of the two Z.AI flagships on AA's own comparison. Still a paid route with no free ID, so it cannot reach the 90s.
- **Overall Score: 66.4/100** *(unchanged)*. (82 + 85 + 70 + 15 + 80) / 5 = 332 / 5 = **66.4**. Best fit: text-only long-horizon coding and tool agents where an open-weight Z.AI model and paid API access are acceptable. New deployments should go to GLM-5.2/5.3 — GLM-5.1 is retained here as a documented April 2026 checkpoint with a live but superseded API.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research. Primary new evidence on 2026-09-29 was the Artificial Analysis GLM-5.2 vs GLM-5.1 comparison, read on **Intelligence Index v4.3.2** (10 evals: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1; ceiling 58), plus Z.AI's GLM-5.1 docs, the Migrate to GLM-5.2 guide, the GLM-5.2 launch post, the Hugging Face model card, BenchLM and the NVIDIA NIM record. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Changes from the 2026-09-24 pass: first AA Intelligence Index v4.3.2 value (26) with ten component rows; context window 203K → 200K (AA-sourced); total parameters 754B → 744B, active 40B now verified; pricing $1.40/$4.40 → $1.28/$4.07 with $0.26 cache-hit; output speed and TTFT now measured (70.4 t/s, 1.71s); supersession by GLM-5.2/5.3 documented. Overall Score unchanged at 66.4; Cost efficiency 72 → 74.
- Future sources: add a new file next to this one, e.g. `GLM_5.2.md`, using the same headings.
