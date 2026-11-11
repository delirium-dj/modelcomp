# GLM-4.7-Flash — findings by Glyph Cluster

- Source: Z.ai (`zai-org/GLM-4.7-Flash`, `opencode/glm-4.7-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.7-Flash
- **Short description:** Z.ai's lightweight 30B-A3B Mixture-of-Experts language model (GLM-4.7 family) optimized for efficient reasoning, coding, and agentic workflows with strong performance for its size class.
- **Provider / access:** Open weights on Hugging Face (`zai-org/GLM-4.7-Flash`, MIT license). Served via Z.ai API and multiple inference providers/runtimes (vLLM, SGLang, Transformers); repo meta lists `opencode/glm-4.7-flash`.
- **Release / knowledge:** GLM-4.7 family release context referenced on HF/blog materials (2025-era GLM-4.5/4.7 lineage); exact GLM-4.7-Flash release date and knowledge cutoff not explicitly stated on fetched HF page.
- **IDs:** `zai-org/GLM-4.7-Flash` (HF), `opencode/glm-4.7-flash` (repo/meta).
- **Context window:** Repo meta states 1M total context; HF evaluation defaults show long generation settings (e.g. max new tokens 131072 in many tasks) but explicit total context window not fully specified in fetched card text. Treated as long-context per vendor/meta claims, with uncertainty noted.
- **Modalities:** Text in; text out (per repo meta and HF model card).
- **Pricing (as of 2026-11-11):** Open weights (MIT, self-host $0). Repo meta indicates free availability on Zen; hosted/API pricing varies by provider.
- **Architecture:** 30B total / 3B active MoE (`glm4_moe_lite`), text-generation causal LM, supports reasoning/thinking mode and tool calling in compatible runtimes (per HF model card).

### Raw benchmarks found

> Source: Hugging Face model card benchmark table and eval results for `zai-org/GLM-4.7-Flash`.

Agent / tool use:

- τ²-Bench: **79.5** (HF benchmark table).
- BrowseComp: **42.8**.
- Terminal-Bench 2.1: **no verified public score found** (separate Terminal Bench 2 mentioned in eval params context, but no numeric score listed in fetched text).
- Tau3-Banking / Tau2-Bench (standardized split): **no verified public score found** (τ²-Bench reported; mapping to requested suite not specified).
- GDPval-AA: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA: **75.2** (HF table/eval results: Diamond 75.2).
- HLE: **14.4**.
- AIME 25: **91.6**.
- LCR / MLCR: **no verified public score found**.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- SWE-bench Verified: **59.2%**.
- LiveCodeBench v6 (LCB v6): **64.0**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **no verified public score found**.

Long context:

- Long-context capability claimed (1M per repo meta), but specific MRCR/RULER/GraphWalks long-context retrieval benchmark scores: **no verified public score found**.

### Normalized scores (1–100)

> Scores are normalized interpretations from available benchmark evidence and specs. Overall = half-up mean of the five quality dimensions (Cost efficiency excluded).

- **Tool use: 76/100.** Strong reported agentic/tool-use results (τ²-Bench 79.5, BrowseComp 42.8) indicate capable tool-using behavior for a 30B-A3B model; capped by limited coverage on standardized agentic suites requested (Terminal-Bench 2.1/Tau3/GDPval-AA/MCP-Atlas not directly verified).
- **Reasoning: 78/100.** Excellent math/reasoning signals (AIME 25 91.6, GPQA 75.2) balanced against weaker hard-knowledge performance (HLE 14.4), suggesting strong contest/math reasoning but limited frontier knowledge robustness.
- **Context window: 82/100.** Vendor/meta positioning indicates very long context (1M claimed), which is strong if realized; capped by lack of explicit verified context spec details in fetched HF text and absence of verified long-context retrieval benchmark scores.
- **Multimodal: 15/100.** Text-only input and output per verified specs.
- **Coding: 79/100.** Solid coding performance for its class (SWE-bench Verified 59.2, LiveCodeBench v6 64.0) supports capable software engineering assistance; capped below top coding specialists/frontier models and by limited additional coding benchmark coverage.
- **Cost efficiency: 97/100.** MIT open weights enable free self-hosting and low-cost deployment; free/low-cost hosted availability reported in meta makes it highly efficient. Not included in Overall.
- **Overall Score: 66/100.** Mean of the five non-cost dimensions (Tool 76, Reasoning 78, Context 82, Multimodal 15, Coding 79) = 330/5 = 66.0, rounded to 66 (half-up). Best fit: efficient open-weight reasoning, coding, and tool-augmented text workflows where low active-parameter cost matters more than multimodal capability.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-11
- Method: Public-source synthesis from fetched Hugging Face model card/eval results and repo metadata; web search unavailable in-session (HTTP 402). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — zai-org/GLM-4.7-Flash](https://huggingface.co/zai-org/GLM-4.7-Flash)
  - [Z.ai — GLM-4.7 blog](https://z.ai/blog/glm-4.7)
  - [GLM-4.5 technical report (arXiv)](https://arxiv.org/abs/2508.06471)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
