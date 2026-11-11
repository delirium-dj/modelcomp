# Claude Mythos 5.1 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Mythos 5.1 (`claude-mythos-5.1`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Restricted-access Anthropic model for advanced cybersecurity and biology research workflows (released 2026-09-01 alongside the Claude Fable 5.1 system card). Not a general chat model — distribution is gated to vetted research customers.
- **Provider / access:** Restricted release; no public per-token API. BenchLM lists the model with the Claude Fable 5.1 / Mythos 5.1 system card as its source. Treat any general-purpose gateway route as unverified.
- **Release / knowledge:** 2026-09-01; knowledge cutoff not published separately from the Claude 5 family (2026-06 for Fable 5.1).
- **IDs:** `claude-mythos-5-1`, `anthropic/claude-mythos-5.1` (inferred from family convention; no public API ID published).
- **Context window:** 1,048,576 tokens (1M) per the BenchLM model record; max output not published.
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls (inferred from the Claude 5 family system card).
- **Pricing (as of 2026-11-11):** no public list price — restricted research release. Cost efficiency cannot be scored from a published rate.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.90%**
- ExploitGym: **23.4%** (weak)
- CVE Rediscovery (Anthropic): **78.3%**; Binary Exploitation Benchmark (control-flow hijacks): **84**
- CyScenarioBench average success rate: **62%**
- Toolathlon / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- De novo protein-binder design (Anthropic): **79.1%**
- Protein domain identification: **63.5%**; protein mutation attribution: **48.0%**
- Molecular Biology Protocols Troubleshooting: **70.2%**
- SingleCellBench (LatchBio): **61.8%**
- Medicinal chemistry (Anthropic): **57.7%**
- GPQA Diamond / HLE / CritPt: no verified public score found for this checkpoint

Coding:

- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public score found — Anthropic publishes no coding rows for Mythos 5.1
- Terminal-Bench 4.0 (60.9%) is the closest proxy for agentic software work

Long context:

- 1M-token context is documented (model record); no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 4.0 at 60.9% and CVE Rediscovery 78.3% are solid; ExploitGym 23.4% and the total absence of OSWorld/Toolathlon rows cap the score.
- **Reasoning: 85/100.** The biology cluster (de novo binder design 79.1%, protocols 70.2%, SingleCellBench 61.8%) is genuinely strong for a domain model; mutation attribution 48.0% shows the limits.
- **Context window: 100/100.** 1M tokens documented (top tier).
- **Multimodal: 70/100.** Text + image + PDF input per the Claude 5 family card; no public multimodal benchmark rows for this checkpoint.
- **Coding: 70/100.** No published coding benchmark at all — scored from the Terminal-Bench 4.0 agentic proxy; low confidence.
- **Cost efficiency: 30/100.** No public price; a restricted research release cannot be evaluated on published rates (scored as a premium-access model).
- **Overall Score: 81.0/100.** Best fit for verified cyber-defence research (CVE rediscovery, exploit benchmarks) and protein/biology work inside a vetted research programme; not a general-purpose model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic Claude Fable 5.1 / Mythos 5.1 system card via BenchLM, BenchLM model profile); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5.1 and Claude Mythos 5.1 system card — Anthropic](https://www.anthropic.com/claude-mythos-5-1)
  - [Claude Mythos 5.1 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-mythos-5-1)
- Future sources: add a new file next to this one, e.g. `Claude_Mythos_5.1_v2.md`, using the same headings.