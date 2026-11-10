# Muse Spark 1.3 — findings by GPT-6.1 Astra

- Source: Meta / `muse-spark-1.3`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary multimodal model for long-running coding and agent workflows. Contributor and Standard are access/data-use tiers of the same model.
- **Provider / access:** Meta Model API, OpenAI-compatible client support, and Muse Code [1][2]. Exact Chat Completions versus Responses coverage was not established by the retrieved product page.
- **Release / knowledge:** Released 2026-09-02 [2]; knowledge cutoff not verified.
- **IDs:** `muse-spark-1.3`, `muse-spark-1.3-contributor` [1]. No current Zen Free ID independently verified.
- **Context window:** 1M documented [1]; primary-source maximum output not established. The secondary listing's approximately 944K output figure is not treated as a confirmed native limit [3].
- **Modalities:** Text, images, video and documents in; text out; reasoning and tools [1]. Audio support was not confirmed by the primary page.
- **Pricing (as of 2026-11-10):** Standard $1.25 input / $4.25 output / $0.15 cached per million, not used to improve Meta products. Contributor $0.10/$0.20/$0.002, used to improve products [1]. Cost score evaluates Standard, consistent with the max-reasoning evaluation rather than assuming free access.
- **Architecture:** Proprietary; parameter counts undisclosed in the examined sources.

### Raw benchmarks found

Meta's model-page comparison evaluates **Muse Spark 1.3 at max reasoning** [1]. These are vendor-reported results, not independent replications.

Agent / tool use:
- GDPval-AA **v2: 1754 Elo**; JobBench **64.9%**.
- OSWorld **2.0: 66.9% partial / 32.0% binary**; DeepSearchQA **90.3%**.
- Internal Agentic IF Index **57.8**; AutomationBench **49.6%**.
- Terminal-Bench **2.1: 88.8%**. Tau2/Tau3, Claw-Eval and MCP-Atlas: no verified public score found in the sources examined.

Reasoning / knowledge:
- No verified public GPQA, HLE, CritPt or Omniscience score found in the sources examined. DeepSearchQA and the long-context evaluations below provide narrower, explicitly provisional reasoning evidence.

Coding:
- DeepSWE **v1.1: 75.4%**; SWEAtlas CodeBase QnA **59.4%** [1].
- LiveCodeBench and SciCode: no verified public score found in the sources examined.

Long context:
- MRCR **98.5% at 256K–512K**, **98.1% at 512K–1M** [1].

### Normalized scores (1–100)

- **Tool use: 96/100.** Terminal-Bench 88.8 and GDPval 1754 clear the frontier anchors; weaker binary computer-use success and missing tool suites cap it.
- **Reasoning: 88/100.** Strong browsing and MRCR support multi-step reasoning provisionally; absence of a verified unaided science/knowledge test limits confidence.
- **Context window: 100/100.** Documented 1M window and 98.1% MRCR at 512K–1M satisfy the project's retrieval ceiling criterion.
- **Multimodal: 85/100.** Native video/image/document understanding meets the broad visual-input tier; audio and non-text generation are unverified here.
- **Coding: 96/100.** DeepSWE 75.4 and terminal/codebase results support frontier coding; vendor-only evaluation and incomplete suite coverage cap it.
- **Cost efficiency: 88/100.** Standard $1.25/$4.25 matches the rubric's paid-value anchor; cheaper Contributor has materially different data-use terms.
- **Overall Score: 93/100.** Half-up mean of (96 + 88 + 100 + 85 + 96) / 5 = 93; best fit is long-context agentic coding.

---

## Signature

- Provided by: **GPT-6.1 Astra (agentrouter/gpt-6-astra)** — 2026-11-10
- Method: Independent fresh public search and vendor-page retrieval; scores are normalized interpretations, not official vendor scores. The reporter label is user-assigned; runtime ID is recorded above.
- Reference URLs:
  - [1 — Meta specifications, benchmarks and prices](https://developer.meta.com/ai/models/muse-spark/)
  - [2 — Official release announcement](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [3 — Secondary catalog and primary-source discovery](https://llm-stats.com/models/muse-spark-1.3)
