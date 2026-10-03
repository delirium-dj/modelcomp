# North Mini Code — findings by LongCat 2.5 Preview

- Source: Cohere/North Mini Code (`CohereLabs/North-Mini-Code-1.0`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's first agentic coding model and inaugural member of the North family. A 30B-parameter MoE (3B active) optimized for code generation, agentic software engineering, and terminal tasks. Open weights under Apache 2.0.
- **Provider / access:** Cohere API, Hugging Face (weights), OpenRouter, Cohere Model Vault. vLLM and SGLang supported.
- **Release / knowledge:** 2026-06-09. Knowledge cutoff not officially stated.
- **IDs:** `CohereLabs/North-Mini-Code-1.0`
- **Context window:** 256K tokens (260K per Artificial Analysis). Max output: 64K tokens.
- **Modalities:** Text input; text output. Reasoning: yes. Tool calls: yes.
- **Pricing (as of 2026-10-03):** Free (open weights, Apache 2.0 license). Cohere API pricing not separately listed.
- **Architecture:** 30B total params, 3B active. MoE with 128 experts (8 active per token). Interleaved sliding-window attention (4K window) and global attention at 3:1 ratio. 49 layers, hidden size 2048. Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **37.4%** (Artificial Analysis)
- GDPval-AA: **0.0%** (Artificial Analysis)
- Terminal-Bench v2: **36.0%** (Cohere official)
- Terminal-Bench Hard: **31.1%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **75.7%** (Artificial Analysis)
- HLE: **11.1%** (Artificial Analysis)
- CritPt: **0.3%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **10**

Coding:

- SWE-bench Verified: **67.6%** (Cohere official)
- SWE-bench Pro: **40.2%** (Cohere official)
- Terminal-Bench v2: **36.0%** (Cohere official)
- Terminal-Bench Hard: **31.1%** (Artificial Analysis)
- SciCode: **38.8%** (Artificial Analysis)
- LiveCodeBench v6: **70.3%** (Cohere official)
- Artificial Analysis Coding Index: **36.5**

Long context:

- AA-LCR: **37.3%** (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 45/100.** τ²-Bench Telecom 37.4% and Terminal-Bench v2 36.0% are moderate. GDPval-AA 0.0% is a significant weakness. Tool calling verified but agentic task performance is limited.
- **Reasoning: 50/100.** GPQA Diamond 75.7% is decent for the size class. HLE 11.1% and CritPt 0.3% are weak. AA Intelligence Index 10 is above average for similarly sized open models.
- **Context window: 60/100.** 256K tokens is solid for repository-scale inputs. AA-LCR 37.3% is moderate.
- **Multimodal: 15/100.** Text-only model; no image or video input verified.
- **Coding: 55/100.** SWE-bench Verified 67.6% is strong for a 3B-active model; LiveCodeBench v6 70.3% is decent. SWE-bench Pro 40.2% and SciCode 38.8% are moderate. AA Coding Index 36.5 confirms mid-tier coding performance.
- **Cost efficiency: 100/100.** Free open weights under Apache 2.0; no API cost for self-hosting.
- **Overall Score: 45/100.** Mean of (45 + 50 + 60 + 15 + 55) / 5 = 45.0 → 45. Best fit: local/on-premise agentic coding with small hardware footprint.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-03
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
