# Inkling — findings by Iceman

- Source: Thinking Machines/Inkling
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab’s Inkling is an open-weight multimodal Mixture-of-Experts model (text/image/audio input, text output) designed as a customizable base for self-hosting, fine-tuning, and agentic/coding applications.
- **Provider / access:** Open weights (Apache 2.0) on Hugging Face `thinkingmachines/Inkling`; hosted/API routes also available via providers. Local metadata lists `opencode/Inkling` and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10; comparison scores noted as generated July 14, 2026 in the card. Knowledge cutoff not explicitly stated.
- **IDs:** `Inkling`, `thinkingmachines/Inkling`.
- **Context window:** 1,000,000 total (weights) per local metadata/HF ecosystem descriptions; hosts may serve smaller windows (64K–1M depending on deployment). Exact served context varies by provider.
- **Modalities:** Text, image, and audio input; text output (Hugging Face model card).
- **Pricing (as of 2026-11-10):** Open weights (self-hosting free, Apache 2.0). Hosted pricing varies (local metadata notes ~$1.00/$4.05 per 1M in some hosted routes and $0/free routes exist).
- **Architecture:** 66-layer decoder-only transformer with sparse MoE feed-forward backbone (each token routed to 6 of 256 experts plus 2 shared experts), hybrid local/global attention, native multimodal encoders (hierarchical patch encoder for image/video, discrete token encoding for audio). 975B total parameters, 41B active (Hugging Face model card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `thinkingmachines/Inkling` evaluation table (Inkling results reported at effort=0.99; comparison scores generated Jul 14, 2026 per card).

Agent / tool use:

- HLE (with tools): **46.0%**
- SWEBench Pro (Public): **54.3%**
- Terminal Bench 2.1 (Best Harness): **63.8**
- GDPVal-AA v2: **1233**
- MCP Atlas: **74.1%**
- Tau 3 Banking: **23.7%**
- BrowseComp (w/ Ctx): **77.1%**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- HLE (text only): **29.7%**
- AIME 2026: **97.1%**
- GPQA Diamond: **87.2%**
- SimpleQA Verified: **43.9%**
- AA Omniscience: **1.0%**
- Global-MMLU-Lite: **88.7%**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- SWEBench Verified: **77.6%**
- SWEBench Pro (Public): **54.3%**
- Terminal Bench 2.1 (Best Harness): **63.8**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**

Vision / multimodal:

- MMMU Pro (Standard 10): **73.5%**
- CharXiv RQ: **78.1%** (with python: **82.0%**)
- Audio MC: **56.6%**; MMAU: **77.2%**; VoiceBench: **91.4%**

Long context:

- 1M total context claimed for weights; served context depends on host (64K–1M per metadata). No standalone MRCR/RULER/GraphWalks numeric long-context retrieval benchmark score extracted.

Other:

- IFBench: **79.8%**
- Safety (FORTRESS Adversarial 78.0%, Benign 95.9%, StrongREJECT 98.6%) reported in card.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 85/100.** Good verified agent/tool results (HLE w/ tools 46.0%, MCP Atlas 74.1%, BrowseComp w/ Ctx 77.1%, GDPVal-AA v2 1233, Terminal Bench 2.1 63.8) indicate solid capability, but Tau 3 Banking (23.7%) and some harder agent tasks cap the score.
- **Reasoning: 84/100.** Strong math and solid knowledge/reasoning signals (AIME 2026 97.1%, GPQA Diamond 87.2%, Global-MMLU-Lite 88.7%, HLE text 29.7%) with weaker factuality/omniscience (SimpleQA Verified 43.9%, AA Omniscience 1.0%) suggest capable but uneven reasoning reliability.
- **Context window: 90/100.** 1M-weight context potential is excellent, but practical served context varies by host (64K–1M); scored for strong long-context capability with deployment caveat.
- **Multimodal: 86/100.** Verified text/image/audio input with competitive multimodal/audio results (MMMU Pro 73.5%, CharXiv RQ 78.1/82.0%, MMAU 77.2%, VoiceBench 91.4%) indicates strong multimodal breadth.
- **Coding: 86/100.** Solid verified coding performance (SWEBench Verified 77.6%, SWEBench Pro 54.3%, Terminal Bench 2.1 63.8) supports good coding/agentic coding, below top-tier specialists on some metrics.
- **Cost efficiency: 90/100.** Apache-2.0 open weights enable free self-hosting and customization; hosted routes vary in price but openness provides strong cost/control value.
- **Overall Score: 86/100.** Mean of the five non-cost dims (85, 84, 90, 86, 86) = 86.2 → 86. Best fit as an open-weight multimodal base for fine-tuning, self-hosted coding/agent workflows, and audio+vision understanding where deployment flexibility matters.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Inkling model card (Hugging Face, Thinking Machines)](https://huggingface.co/thinkingmachines/Inkling)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
