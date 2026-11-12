# Claude Mythos 5.2 — findings by GPT 6 Astra

- Source: Anthropic / `claude-mythos-5-2`
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's verified-access configuration of the underlying model also served as Claude Fable 5.2, with more permissive cybersecurity and biology safeguards. The official system card calls these two configurations of one model; this report preserves the dataset's existing subject and records only results explicitly attributed to Mythos.
- **Provider / access:** Claude Messages API for verified organizations; documented partner IDs on Bedrock, Google Cloud and Microsoft Foundry. Access is subject to Anthropic's verification programs.
- **Release / knowledge:** Released 2026-11-09; June 2026 reliable knowledge and training-data cutoff. [Official specifications](https://platform.claude.com/docs/en/models/mythos-5-2/overview).
- **IDs:** `anthropic/claude-mythos-5-2`; Bedrock `global.anthropic.claude-mythos-5-2`. No Zen Free ID verified in the cited sources.
- **Context window:** 1M tokens; 128K maximum synchronous output, documented on the Mythos page. A Mythos-specific long-context retrieval rate was not found.
- **Modalities:** Text and image input; text output; adaptive thinking, default High effort, and tool use. No native audio/video output documented.
- **Pricing (as of 2026-11-12):** $8 input / $40 output per 1M tokens; $0.20 cache reads, $10 five-minute cache writes and $16 one-hour cache writes. Batch input/output have a 50% discount. Optional fast mode is $16/$80. The launch announcement describes 30-day retention except for eligible authorized arrangements. [Model pricing](https://platform.claude.com/docs/en/models/mythos-5-2/overview), [launch](https://www.anthropic.com/claude-fable-and-mythos-5-2).
- **Architecture:** Proprietary; undisclosed parameter count. Same underlying model as Fable 5.2, not independently verified separate weights.

### Raw benchmarks found

Source: [Claude Fable 5.2 and Mythos 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card), PDF pages 211–212 and 249–253. These are vendor-reported results. Safeguards-off research configurations are identified below and should not be treated as guaranteed production behavior.

Agent / tool use:

- Terminal-Bench 4.0: **70.5%**, Mythos without safeguards; **660 trials**, standard error **±1.8 percentage points**, Claude Code `--bare`, Max effort, offline-resource setup (section 8.5).
- Terminal-Bench-Science 0.1: **75.3%**, Mythos without the Fable safeguards; **700 trials**, task-clustered standard error **±4.3 points**, Claude Code `--bare`, Max effort, no internet (section 8.6).
- SingleCellBench: **65.6%**, vendor-reported LatchBio bioinformatics evaluation, bash/file-editor/package tools, biology safeguards disabled (section 8.18.1).
- Terminal-Bench 2.1, Tau3-Banking/Tau2-Bench, GDPval-AA, Claw-Eval/ClawProBench, Toolathon/MCP-Atlas/SWE Atlas Codebase QnA: no verified Mythos-specific public score found in the consulted sources. Fable-labelled results are not relabelled as Mythos results.

Reasoning / knowledge:

- Medicinal chemistry: **69.0%**, **504** structure-based ADME questions, safeguards-off evaluation (section 8.18.3).
- Protein-domain identification: **91.8%**, no tools, Pfam-family selection from amino-acid sequences (section 8.18.7).
- Molecular-protocol troubleshooting: **77.1%**, safeguards-off life-sciences evaluation (section 8.18.6).
- GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, and Omniscience accuracy/hallucination rate: no verified Mythos-specific public score found. The system card's headline HLE table is labelled Fable; it is only related-model context, not a Mythos measurement.

Coding:

- CVE Rediscovery: **89.6%**, Max effort with cyber/bio safeguards disabled; **1,829** October-2026 advisories, repository snapshot and localized files, no internet, model-judged root-cause match (section 8.19). This evaluates vulnerability finding, not general issue resolution, and the card notes possible prior exposure to some advisories.
- Terminal-Bench 4.0 **70.5%** and SingleCellBench **65.6%** provide direct terminal/programming workflow evidence under the configurations above.
- SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: no verified Mythos-specific public score found. Fable's coding figures are not transferred.

Long context:

- Official **1M-token** capacity. MRCR/RULER/GraphWalks or Mythos-specific ProgramBench results: no verified public score found; the card's ProgramBench result is explicitly Fable-labelled.

Additional multimodal evidence:

- Biomedical image analysis: **80.7%**, score normalized to competition-best results, one attempt per problem, biology safeguards disabled (section 8.18.5).
- Morphology-to-molecule matching: **35.2%**, multi-channel cell-image matching, safeguards-off configuration (section 8.18.2).

### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench 4.0 70.5% and scientific-agent 75.3% support advanced tool execution; vendor harnesses, sampling uncertainty and safeguards-off conditions cap confidence.
- **Reasoning: 93/100.** Scientific workflows, 91.8% protein-domain identification and 69.0% medicinal chemistry support strong reasoning, but the direct evidence is domain-heavy and no Mythos-specific broad reasoning index was verified.
- **Context window: 95/100.** Official 1M capacity reaches the highest capacity tier; no Mythos-specific retrieval evidence supports 100.
- **Multimodal: 70/100.** Documented image input and measured biomedical-image work support the image-input tier; outputs remain text and image results use a specialized research setup.
- **Coding: 94/100.** Terminal-Bench and 89.6% CVE rediscovery support complex code analysis and execution; vulnerability localization is not equivalent to broad SWE-bench issue-solving coverage.
- **Cost efficiency: 40/100.** Standard $8/$40 pricing remains expensive despite $0.20 cache reads and batch discounts; no free inference tier was verified.
- **Overall Score: 89/100.** Half-up mean: (95 + 93 + 95 + 70 + 94) / 5 = 89.4 → 89. Best fit is technically demanding, authorized research with the configuration caveats above; cost is excluded.

---

## Signature

- Provided by: **GPT 6 Astra (agentrouter/gpt-6-astra)** — 2026-11-12
- Method: Fresh public search and direct official-document research, including text extraction of the 264-page vendor system card. Exact Mythos labels and evaluation safeguards were checked; related Fable results were not substituted. No peer findings were used. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Claude Mythos 5.2 specifications](https://platform.claude.com/docs/en/models/mythos-5-2/overview)
  - [Anthropic: Claude Fable 5.2 and Mythos 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
  - [Anthropic: joint launch and access/pricing details](https://www.anthropic.com/claude-fable-and-mythos-5-2)
- Future sources: add a separate signed findings file using the same headings.
