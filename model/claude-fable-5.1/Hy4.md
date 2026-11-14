- Source: Anthropic/Claude Fable 5.1
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's 2026-09-02 flagship, released together with Claude Mythos 5.1 — the two share one base model and differ only in safety guardrails and access. Fable 5.1 is the general-public version; a distinct model version, not an alias.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud Vertex AI and Microsoft Azure Foundry; Claude Code (high effort default), Claude Cowork / claude.ai (medium effort default). Enterprise Frontier Safeguards (customer-owned cloud, self-managed human review), EU AI Act text watermarking + detection API, and a zero-data-retention mode for eligible customers introduced 2026-09.
- **Release / knowledge:** 2026-09-02 (some sources 2026-09-01); knowledge cutoff: no verified public score found.
- **IDs:** `claude-fable-5-1` family ID as cited; the earlier June 2026 Fable 5 used `claude-fable-5`. No free Zen ID verified.
- **Context window:** 1,000,000 tokens documented for the Claude 5 series (Sonnet 5 / Fable lineage); a 1M window with 128K max output is specifically documented only for the later Fable 5.5 Azure catalog entry, so the exact Fable 5.1 input/output split is not verified — no verified public score found for a Fable 5.1-specific figure.
- **Modalities:** text and image in, text out; document reasoning, scientific-chart and screenshot understanding, computer use, code generation; extended reasoning with low/medium/high/max effort; native tool use. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** the June 2026 Fable 5 / Mythos 5 launch price was reported at $10 / 1M input and $50 / 1M output; Fable 5.1 launched with a reported price cut of up to 45% and an average ~$1.40/task saving from cheaper cache reads, but no exact Fable 5.1 rate card was verifiable this pass. AA measured ~$3.76 per task at max reasoning (20% above Fable 5); Opus 5.5's default was $1.34/task vs Fable 5.1's $2.98/task.
- **Architecture:** Proprietary, closed weights; internal codename Capybara for the shared Fable 5 / Mythos 5 base. Two-stage safety classifier (activation probes + risk classifier) with silent downgrade to Claude Opus 4.8 on cyber/bio/distillation requests; anti-distillation signature verification on chain-of-thought blocks. Cyber false positives down ~60% and basic-biology/medical false positives down ~85% vs Fable 5.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2 knowledge work: **1853 Elo** — above Opus 5's 1824
- Computer Use: **80.7%** (Opus 5.5 81.8%); visual chart recognition: **88.4%** (Opus 5.5 89.0%)
- OSWorld 2.0 (strict scoring): **41.7%**; OSWorld-2.1 offline subset: **76.8%** in Google's Carbon table
- AutomationBench: **31.4%** (up from Fable 5's 17.1%); Zapier/AA variant in Google's table: **31.4%**
- Vending-Bench 2 bank balance: **$5,422** in Google's Carbon table
- Agents' Last Exam v1.1: no verified public score found (dash in Google's table)
- Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **65%**
- AA Intelligence Index, max: **53**; medium: **49** (Opus 5.5 58 / 51); AA Index v5.0 (Google table): **49**
- Another Baike comparison cites Fable 5.1 at **66** on an AA general-intelligence test (different index version — reported separately, not merged)
- GPQA Diamond / HLE (no-tools) / LCR / CritPt / Omniscience: no verified public score found

Coding:

- Terminal-Bench 4.0: **55.8%** (Mythos 5.1 60.9%); AA-scored in Google's table: **52.0%**
- Terminal-Bench-Science 0.1: **52.6%** (up from Fable 5's 24.7%); AA-scored in Google's table: **43.3%**
- CursorBench 3.2.0: **73.4%** (up from 70.5%)
- FrontierSWE 2: **56.3%**; SWE-sweep: **2.9%** in Google's Carbon table
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found for this exact ID

Long context:

- GraphWalks 256k to 1M BFS (F1): **65.0%** in Google's Carbon table (Carbon 96.2%, Argon 84.2%, Astra 71.8%, Opus 5.5 66.8%)
- Chartography **46.2%**; Blueprint-Bench 2 **41.9%**; RiemannBench **65.6%**; CWE-bench **58.0%**
- Independent MRCR / RULER figures: no verified public score found

### Normalized scores (1–100)

- **Tool use: 93/100.** A top GDPval-AA v2 score (1853 Elo), 80.7% Computer Use and 88.4% visual chart recognition, with doubled AutomationBench over Fable 5; capped by weak Vending-Bench 2 ($5,422) and OSWorld 2.0 (41.7%).
- **Reasoning: 93/100.** 65% HLE with tools and a competitive AA index at launch; capped by the AA v5.0 figure of 49 and by Opus 5.5 overtaking it within three weeks (58 vs 53).
- **Context window: 92/100.** The Claude 5-class 1M window with long-horizon task strength; capped by a low GraphWalks 65.0% and no verified Fable 5.1-specific input/output split.
- **Multimodal: 88/100.** Strong chart/screenshot comprehension (88.4% visual chart); capped by poor Chartography (46.2%) and Blueprint-Bench 2 (41.9%), text-only output, and no verified audio/video input.
- **Coding: 92/100.** CursorBench 3.2.0 73.4%, Terminal-Bench 4.0 55.8% and more than doubled Terminal-Bench-Science (52.6%); capped by SWE-sweep 2.9% and by trailing Mythos 5.1 (60.9%) and Opus 5.5 (66.4%) on Terminal-Bench 4.0.
- **Cost efficiency: 68/100.** A reported up-to-45% price cut and cheaper cache reads, but $2.98/task vs Opus 5.5's $1.34/task and ~1.7x Fable 5's output tokens make it expensive per completed task. Excluded from Overall.
- **Overall Score: 92/100.** Half-up mean of 93, 93, 92, 88, 92 = 91.6 → 92. Best fit: guarded general-purpose agentic work and knowledge tasks where the public safety guardrails and broad cloud availability matter.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Fable article (which covers the Fable 5 → 5.1 → 5.2 lineage) and the Baidu Baike Claude 5 series article, cross-checked against Google DeepMind's official Gemini 4 Carbon benchmark table where it scores Fable 5.1. Lineage figures measured under the earlier Fable 5 / Mythos 5.1 IDs are labelled by that ID and never silently merged; conflicting AA index versions are reported separately. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Fable — 百度百科 (Fable 5/5.1/5.2 lineage, benchmarks, safety, pricing context)](https://baike.baidu.com/item/Fable/68576242)
  - [Claude 5系列模型 — 百度百科 (Fable 5.1 + Mythos 5.1 launch benchmarks, pricing)](https://baike.baidu.com/item/Claude%205%E7%B3%BB%E5%88%97%E6%A8%A1%E5%9E%8B/68556432)
  - [Gemini — Google DeepMind (official benchmark table incl. Claude Fable 5.1)](https://deepmind.google/models/gemini/nano/)
