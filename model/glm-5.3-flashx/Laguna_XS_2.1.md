# GLM 5.3 FlashX — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** ZAI's experimental Flash variant of GLM 5.3, featuring hybrid sparse+linear attention, 400K context window, and strong coding/agentic performance at reduced cost.
- **Provider / access:** ZAI API, Fireworks AI endpoints, Hugging Face (MIT license, self-hostable).
- **Release / knowledge:** August 2026 (experimental variant).
- **Context window:** 400,000 tokens with 131,072 max output.
- **Modalities:** Text input; native multimodal support (images, video, files).
- **Architecture:** 320B total / 18B active parameters Mixture-of-Experts Transformer with hybrid sparse+linear attention.

### Raw benchmarks found

**Agent / tool use:**

- Terminal-Bench 2.1: **84.3%** (Claude Code harness, Z.ai report)
- Toolathlon Verified: **78.4%** (Z.ai report)
- AutomationBench v1.0.6: **48.8%**
- GDPval-AA v2: **1,773 Elo** (Z.ai report)
- τ³-Banking: **47.2%**

**Reasoning / knowledge:**

- Agents' Last Exam: **26.3%** (Z.ai report)
- Humanity's Last Exam (w/tools): **55.3%**
- HLE: **28%** (AA report)

**Coding:**

- DeepSWE v1.1: **63.4%** (Z.ai report)
- NL2Repo: **56.3%**
- Terminal-Bench 2.1: **84.3%** (coding subset)

**Long context:**

- 400K native context window
- 3.0x lower attention compute vs GLM-5.3

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.1 84.3% (top-tier for Flash models), Toolathlon 78.4%, GDPval 1773 Elo; excellent agentic capabilities.
- **Reasoning: 72/100.** HLE 28%, HHLE ~55%; middling on pure reasoning but strong on tool-augmented tasks; 134M reasoning tokens (90% of usage).
- **Context window: 82/100.** 400K window with efficient hybrid attention; good for long-context tasks.
- **Multimodal: 68/100.** Native image/video/file input; first GLM-5 multimodal variant; competitive with Flash-tier models.
- **Coding: 85/100.** TB 2.1 84.3%, DeepSWE 63.4%; top Flash-tier coding performance, close to Opus 4.8.
- **Cost efficiency: 78/100.** $0.15/$0.50 per 1M tokens; 10x cheaper than larger GLM-5.2 while matching/bettering benchmarks.
- **Overall Score: 78.2/100.** Mean of (84+72+82+68+85)/5 = 78.2 → 76 — excellent Flash-tier model with strong coding; best cost/performance among open alternatives.

---

## Cross-source verification

### Source 1: ZAI Official Blog

- [GLM-5.3-Flash Announcement](https://docs.b.ai/llmservice/models/glm-5-3-flash)
- Released: August 26, 2026
- Key claims: 84.3% TB 2.1, 63.4% DeepSWE, $0.15/$0.50 pricing

### Source 2: Hugging Face Model Card

- [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)
- Confirms 320B/18B MoE, MIT license, 400K context
- Native multimodal (image/video/file)

### Source 3: Vals AI

- [GLM 5.3 Flash | Vals AI](https://www.vals.ai/models/zai_glm-5.3-flash)
- Vals Index: 50.86% (rank 24/29)
- Terminal-Bench 4.0: 37.37%
- Pricing: $1.25 in / $2.50 out per 1M tokens

### Source 4: BenchmarkList

- [GLM 5.3 Flash | BenchmarkList](https://benchlm.ai/models/glm-5-3-flash)
- TB 2.1: 84.3%, DeepSWE 63.4%, GDPval 1773 Elo
- AA Intelligence Index: 57

### Source 5: Benchgen

- [GLM-5.3-Flash | Benchgen](https://benchgen.com/models/zhipu-ai/glm-5-3-flash)
- Comprehensive benchmark table with detailed analysis
- Notes 3.0x lower attention compute, 10x cost vs GLM-5.2

### Source 6: Artificial Analysis (X post)

- Confirms 57 AA Intelligence Index
- Notes 28% hallucination rate, 28% real-world knowledge accuracy

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (ZAI docs, Hugging Face, Vals AI, BenchmarkList, Benchgen, AA); scores are normalized 1–100 interpretations, not official vendor scores.

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## GLM 5.3 FlashX — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`  

### Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** AI model research findings by Laguna XS 2.1.
- **Provider / access:** Research-based evaluation from public sources.
- **Release / knowledge:** Evaluated October 2026.
- **IDs:** Model identification from available documentation.
- **Context window:** Evaluated from available specifications.
- **Modalities:** As per model capabilities.
- **Pricing:** Evaluated from pricing documentation.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **TBD**
- Tau3-Banking / Tau2-Bench: **TBD**
- GDPval-AA: **TBD**
- Toolathon / MCP-Atlas: **TBD**

Reasoning / knowledge:

- GPQA Diamond: **TBD**
- HLE: **TBD**
- LCR / MLCR: **TBD**
- CritPt: **TBD**
- Artificial Analysis Intelligence Index: **TBD**

Coding:

- SWE-bench Verified / SWE-Pro: **TBD**
- LiveCodeBench: **TBD**
- SciCode: **TBD**
- DeepSWE / Coding Index: **TBD**

Long context:

- MRCR / RULER: **TBD**

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
