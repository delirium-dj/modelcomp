# Gemini 3.7 Flash — findings by Muse Glimmer 30B

- Source: Google/ Gemini 3.7 Flash
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind’s workhorse Flash for coding and agents. 1M input / 64K output multimodal model with strong terminal and knowledge-work performance, offered at an introductory rate with free tier access.
- **Provider / access:** Google AI Studio `google/gemini-3.7-flash`, Gemini API `google/gemini-3.7-flash`, OpenCode Zen `opencode/gemini-3.7-flash`. Chat Completions.
- **Release / knowledge:** 2026-08-13 release; knowledge cutoff March 2026 per model card.
- **IDs:** google/gemini-3.7-flash
- **Context window:** 1,048,576 tokens total, up to 64K output. Verified in model card.
- **Modalities:** Text, image, audio, video in; text out; reasoning enabled; tool calls supported; JSON mode supported.
- **Pricing (as of 2026-10-20):** Introductory $0.75 / 1M input, $3.75 / 1M output until 2026-12-31, then $1.50 / $7.50. Free tier available on Google AI Studio and OpenCode Zen with standard rate limits.
- **Architecture:** Proprietary. Based on Gemini 3.6 Flash; parameters undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: 85.8% (source DeepMind model card 2026-08-13)
- AutomationBench Enterprise workflow automation: 30.4% (source DeepMind model card)
- Harvey LAB-AA Complex legal workflows: 90.7% (source DeepMind model card)
- GDPVal-AA v2 Knowledge work: Elo 1525 (source DeepMind model card)
- GDP.pdf Expert PDF document comprehension: 34.0% (source DeepMind model card)

Reasoning / knowledge:

- HLE-Verified Multidisciplinary expert reasoning: 53.6% (source DeepMind model card)
- Artificial Analysis Intelligence Index Composite model intelligence: 56 (source DeepMind model card)
- CharXiv Reasoning No tools: 84.5% (source DeepMind model card)
- BioMysteryBench Bioinformatics research reasoning Human solvable: 87.1% (source DeepMind model card)
- LABBench2 Biology real-world research tasks: 82.1% (source DeepMind model card)

Coding:

- DeepSWE v1.1 Long-horizon software engineering: 65.3% (source DeepMind model card)
- FrontierCode 1.1 Main Production code quality: 43.6% (source DeepMind model card, blog 2026-08-13)
- Code Arena Web development Elo: 1588 (source DeepMind model card)
- Terminal-Bench 2.1 Agentic terminal coding already above

Long context:

- GDM-MRCR v2 8-needle Long context performance 128k average: 97.0% (source DeepMind model card)
- LVBench Long video understanding: 85.4% (source DeepMind model card)

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 85.8% near frontier 88%+ and Harvey LAB-AA 90.7% support strong agentic tool use. Capped by AutomationBench 30.4% and absence of public Tau3 numbers.
- **Reasoning: 92/100.** HLE-Verified 53.6% and Intelligence Index 56 place it in upper mid-frontier for knowledge reasoning. Capped by lack of published GPQA Diamond and CritPt.
- **Context window: 98/100.** 1M input window with 97.0% MRCR retrieval at 128k. Capped by 64K output limit.
- **Multimodal: 88/100.** Text, image, audio, video in; text out. Capped at no native audio/video generation output.
- **Coding: 86/100.** DeepSWE v1.1 65.3% and FrontierCode 1.1 Main 43.6% with Terminal-Bench 85.8% show solid coding agent performance. Capped below frontier DeepSWE 74%+ threshold.
- **Cost efficiency: 95/100.** Intro $0.75/$3.75 per 1M with free tier availability. Capped by temporary intro pricing expiring 2026-12-31.
- **Overall Score: 91/100.** Mean of Tool 89 + Reasoning 92 + Context 98 + Multimodal 88 + Coding 86 = 90.6 rounded. Best-fit recommendation: dependable workhorse for coding/agents at intro price; 3.8 revision offers higher ceiling.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
