# Gemma 4 12B Unified — findings by GLM 5.3 Flash

- Source: Google DeepMind (`gemma-4.12b-unified`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B (Unified)
- **Short description:** Google DeepMind's open-weights Gemma 4 family member — a 12B dense, encoder-free "unified" multimodal model that ingests text and images through one architecture. Top use cases: laptop-runnable multimodal inference, coding help, and self-hosted/full-data-control deployments.
- **Provider / access:** Hugging Face `google/gemma-4-12B-it` (open weights, Apache 2.0 per coverage of the family); hosted on Vertex AI and third-party hosts (Groq-class providers; see the Gemma 4 hosted-pricing guides); indexed by Artificial Analysis as gemma-4-12b. Chat Completions-style or Gemini-API-style depending on host.
- **Release / knowledge:** Gemma 4 family released July 2026 (family overview 2026-07-08, E4B README 2026-07-15); knowledge cutoff not published.
- **IDs:** `google/gemma-4-12B-it` (HF); Artificial Analysis `gemma-4-12b`. No dedicated OpenCode Zen Free ID verified.
- **Context window:** 256K tokens officially (Hugging Face model card); one guide (MindStudio) cites 128K "in practice" for the 12B/26B variants. Verified how: vendor card vs third-party guide — unresolved practical-vs-rated gap.
- **Modalities:** text + image input via the encoder-free unified architecture, text output; described as "any-to-any" in open-weights comparisons. Reasoning-capable (a reasoning-mode variant is referenced for the family); tool calls/JSON mode not documented for the 12B.
- **Pricing (as of 2026-10-05):** open weights free (Apache 2.0); hosted rates roughly $0.04–$0.99 per 1M input tokens depending on provider and model size (2026 API pricing guide, verified Sept 2026); exact Vertex AI 12B rate not published in the sources reviewed.
- **Architecture:** 12B dense (Gemma 4 spans 2.3B–31B across dense E2B/E4B/12B/31B and MoE 26B-A4B), 16-bit default precision, pre-trained + instruction-tuned variants; Gemma 4 technical report on arXiv.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~78.8%** (third-party technofuzn summary of vendor numbers; largely first-party technical-report data)
- HLE: no verified public score found
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: indexed at artificialanalysis.ai/models/gemma-4-12b (composite value not confirmed in sources reviewed)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found for the 12B (aggregators disagree on whether one is published)
- LiveCodeBench v6: **72.0%** (orcarouter independent listing, "respectable for a 12B"); conflicting **51.1** in a Thinking Machines Labs open-weights comparison harness — unresolved harness discrepancy
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval benchmark (MRCR / RULER / GraphWalks) reported for the 12B

### Normalized scores (1–100)

- **Tool use: 55/100.** Zero published agentic/tool benchmarks (no Terminal-Bench, Tau2, GDPval, or Toolathon anywhere); the score is a neutral floor for a modern 12B with strong single-turn coding but unproven multi-step tool use.
- **Reasoning: 72/100.** GPQA Diamond ~78.8% is good for the 12B class (family flagship 31B reaches 84–86); capped by absent HLE/LCR data and largely first-party sourcing.
- **Context window: 70/100.** 256K official window is a solid mid-tier spec; capped by the 128K practical claim and zero retrieval verification.
- **Multimodal: 58/100.** Encoder-free unified text+image input is architecturally credible, but no measured vision benchmark (MMMU/CharXiv/ChartQA) surfaced for the 12B specifically.
- **Coding: 68/100.** LiveCodeBench v6 72.0% independent score is genuinely strong for 12B; capped hard by the conflicting 51.1 TML-harness number and the absence of any SWE-bench result.
- **Cost efficiency: 90/100.** Free Apache 2.0 weights that run on a laptop, plus hosted options from ~$0.04/1M input, make this one of the cheapest usable multimodal models; not higher because hosted output-token rates vary wildly by provider.
- **Overall Score: 64.6/100.** Mean of the five quality dims (55 + 72 + 70 + 58 + 68) / 5. Best fit: self-hosted, privacy-sensitive multimodal and coding assistance on commodity hardware — not agentic workloads.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (Google AI for Developers, Hugging Face, Gemma 4 technical report references, Artificial Analysis, orcarouter, technofuzn, gemmai4.com pricing guide); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
