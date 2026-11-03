# Claude Mythos 5.1 — findings by Kimi K3.1 Pro

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's verification-gated version of Claude Fable 5.1 for approved cybersecurity and life-sciences work. Anthropic states that Fable 5.1 and Mythos 5.1 are the same underlying model with different safeguard configurations, not separate architectures.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud, and Microsoft Foundry; verification required through programs such as the Cyber Verification Program or Life Sciences Verification Program. The Claude API uses the Messages API with adaptive thinking.
- **Release / knowledge:** Released 2026-09-01; reliable knowledge and training-data cutoff June 2026.
- **IDs:** Claude API `claude-mythos-5-1`; Amazon Bedrock `anthropic.claude-mythos-5-1`; Google Cloud and Microsoft Foundry `claude-mythos-5-1`. No free OpenCode Zen ID was verified.
- **Context window:** 1,000,000 tokens total context and 128,000 maximum synchronous output tokens, verified in Anthropic's model-specific documentation.
- **Modalities:** Text/image input and text output; adaptive reasoning always on, default effort `high`; tool use is supported and evaluated in agentic harnesses. No audio/video input or separate JSON-mode capability was verified on the model-specific page.
- **Pricing (as of 2026-11-03):** $10 input / $50 output / $0.25 cache read per 1M tokens; five-minute cache writes $12.50 and one-hour cache writes $20 per 1M. Batch API input/output receives a 50% discount.
- **Architecture:** Proprietary; Anthropic identifies it as the same underlying model as Fable 5.1, with safeguard and access differences.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9% at max effort** (Anthropic system card; exact Mythos 5.1 result). The launch post contrasts this with Fable 5.1's 55.8% and attributes the gap to earlier cyber-safeguard interventions.
- ExploitBench v8-bench: **12.61 AutoNudge mean flags; 83.0% capability; 222/410 full ACE exploits across both arms** (system card; exact Mythos 5.1).
- CyScenarioBench: **61.7% task completion** (Anthropic's later Haiku 5.5/Opus 5.5 system-card comparisons; exact Mythos 5.1).
- Shared-underlying-model evidence, not an exact Mythos run: Fable 5.1 scored **1,853 Elo on GDPval-AA at max**, **87.2% on MCP Atlas**, and **77.9% partial / 41.7% strict on OSWorld 2.0**. Production safeguards make these provisional proxies for Mythos.

Reasoning / knowledge:

- ArXivMath June 2026: **93.88% with tools / 91.33% without tools**, both at max effort (system card; exact Mythos 5.1).
- AA-Omniscience launch record: **0.57 net; 0.77 correct; 0.20 incorrect; 0.02 abstained**. A later 2026-09-22 record reports **0.56 net**; both dated configurations are retained.
- ProteinGym Hard: **49.3% rank correlation** (system card; exact Mythos 5.1).
- BioMysteryBench: **90.3% human-solvable / 44.1% human-difficult**, max effort (system card; exact Mythos 5.1).
- Shared-underlying-model evidence: Fable 5.1 scored **93.7% on GPQA Diamond**, **65.6% on HLE with tools**, and **65.7 on Artificial Analysis Intelligence Index**; these are provisional because the public rows name Fable rather than Mythos.

Coding:

- Terminal-Bench 4.0: **60.9% at max effort** (exact Mythos 5.1; also the strongest directly identified public coding result found).
- Shared-underlying-model evidence, provisional for Mythos: Fable 5.1 scored **73.4% on CursorBench 3.2 at max**, **91.4% on Terminal-Bench 2.1**, **81.2% on SWE-bench Pro at max**, **89.1% on SWE-bench Multilingual**, and **56.3% on FrontierSWE v2** (five Proximus trials with a 20-hour task budget).
- No separately identified public Mythos 5.1 SWE-bench Verified score was found; no value is inferred for that benchmark.

Long context:

- The exact **1M context / 128K output** limits are verified, but no separately identified public Mythos 5.1 MRCR, RULER, or Graphwalks result was found.
- Shared-underlying-model evidence: Fable 5.1 scored **85.3% on AA-LCR** (2026-10-29). This is a provisional long-context proxy, not an exact Mythos result.

Multimodal:

- Biomedical image analysis: **67.1%** (Anthropic's Opus 5.5 system-card comparison, reproduced by Sugra; exact Mythos 5.1).
- Shared-underlying-model evidence, provisional for Mythos: Fable 5.1 scored **88.4% on MMMU-Pro at max**, **92.7% on CharXiv-R**, **79.7% on LVBench**, and **54.7% on SWE-bench Multimodal**.
- The model-specific documentation verifies text/image input and text output; video-generation and audio capabilities were not found.

### Normalized scores (1–100)

- **Tool use: 97/100.** Exact Mythos results include Terminal-Bench 4.0 60.9% and strong cyber-agent performance, while the shared model's GDPval-AA, MCP Atlas, and OSWorld results support frontier tool use; limited exact-Mythos general-agent coverage caps the score.
- **Reasoning: 97/100.** ArXivMath 93.88% with tools and 91.33% without tools, strong scientific evaluations, and the shared model's GPQA/HLE results indicate frontier reasoning; scarce independently run exact-Mythos general-reasoning results cap the score.
- **Context window: 96/100.** The verified 1M window and 128K output are top-tier, and shared-model AA-LCR 85.3% is strong; no exact-Mythos public needle-retrieval series was found.
- **Multimodal: 93/100.** Text/image input, exact biomedical-image evidence, and strong shared-model MMMU-Pro/chart/video results support a high score; lack of exact-Mythos general vision runs and text-only output cap it.
- **Coding: 98/100.** Exact Terminal-Bench 4.0 60.9% is frontier-class, and the identical underlying model's CursorBench, Terminal-Bench 2.1, SWE-bench Pro, and FrontierSWE evidence is excellent; the absence of a distinct Mythos SWE-bench Verified run prevents a perfect score.
- **Cost efficiency: 50/100.** Premium $10/$50 pricing is partly offset by $0.25 cache reads and 50% batch discounts, but this remains an expensive verified-access model.
- **Overall Score: 96.2/100.** Half-up mean of 97, 97, 96, 93, and 98; best fit for vetted cyberdefense, life-sciences research, and frontier agentic coding where reduced safeguard friction is essential.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-03
- Method: Independent public internet research using Anthropic's announcement, model documentation and system-card-linked records, BenchmarkList, LLM Stats, and Sugra's source-attributed benchmark catalog; scores are normalized 1–100 interpretations, not official vendor scores. Shared Fable 5.1 evidence is explicitly labeled provisional because Anthropic identifies the same underlying model but different safeguards.
- Reference URLs:
  - [Anthropic — Introducing Claude Fable 5.1 and Claude Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Claude Platform Docs — Claude Mythos 5.1](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
  - [Anthropic — Fable 5.1 and Mythos 5.1 system card](https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card)
  - [BenchmarkList — Claude Mythos 5.1 source-linked evaluations](https://benchmarklist.com/models/anthropic-claude-mythos-5.1/)
  - [BenchmarkList — Claude Fable 5.1 shared-underlying-model evaluations](https://benchmarklist.com/models/anthropic-claude-fable-5.1/)
  - [Sugra — Claude Mythos 5.1 source-attributed benchmark results](https://sugra.systems/blog/llm-bench/models/claude-mythos-5-1)
- Future sources: add a new file next to this one using the same headings.
