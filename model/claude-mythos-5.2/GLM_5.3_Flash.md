# Claude Mythos 5.2 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-mythos-5-2`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's verification-gated variant of Claude Fable 5.2 (released 2026-11-09) — the same underlying model without the cyber/biology safeguards, for vetted organizations in the Cyber and Life Sciences Verification Programs. 1M context / 128K output, adaptive thinking always on.
- **Provider / access:** Anthropic Claude API, Messages API, ID `claude-mythos-5-2`; also Amazon Bedrock (`anthropic.claude-mythos-5-2`), Google Cloud (managed both ways) and Microsoft Foundry. Access requires Anthropic verification (Cyber Verification Program or Life Sciences Verification Program); not generally available. Chat Completions-style Messages API.
- **Release / knowledge:** 2026-11-09 release; reliable knowledge cutoff Jun 2026 (training data cutoff Jun 2026).
- **IDs:** `claude-mythos-5-2` (pinned snapshot). No free tier; 30-day data retention requirement unless Enterprise Frontier Safeguards is enabled (ZDR-compatible via EFS).
- **Context window:** 1,000,000 (1M) total; 128K max output — verified from the official model page.
- **Modalities:** Text and image in; text out. Adaptive thinking always on (cannot be disabled; `effort` steers depth, default `high`). Tool calls yes; forced tool use (`tool_choice` `any`/`tool`) returns 400; web search + code execution server tools. No audio/video I/O.
- **Pricing (as of 2026-11-11):** identical to Fable 5.2 — $8 in / $40 out per 1M; cache write 5m $10, 1h $16; cache read $0.20 (2.5% of base input); Batch API 50% off; fast mode $16/$80 (up to 2.5x token speed; Verification-Program orgs only).
- **Architecture:** proprietary, closed weights; same checkpoint as Claude Fable 5.2 minus the cyber/biology safeguard classifiers. Automated behavioral audit overall misaligned-behavior score 2.67 (lower is better; Mythos 5.1 3.28, Opus 5.5 2.79, Sonnet 5.5 3.10); sandbox-escape use of planted credentials 3.1% of adversarial scenarios (vs Mythos 5 39%, Mythos 5.1 21%, Opus 5.5 3.3%).

### Raw benchmarks found

Agent / tool use (from the official launch announcement; Mythos-branded where noted):

- CyScenarioBench (cybersecurity, Mythos 5.2): **76.3%** (vs Mythos 5.1 61.7%, Opus 5.5 without safeguards 67.6%, GPT-6 Cyber 61%) — note each lab's scores use unique tasks
- CVE Rediscovery (Mythos 5.2, Oct 2026 run, 1,829 CVEs): **89.6%** (vs Mythos 5.1 78.3%, Opus 5.5 without safeguards 81.3%) — 10.2% more vulnerabilities than Opus 5.5, 14.4% more than Mythos 5.1
- Terminal-Bench-Science 0.1 (agentic scientific research): **75.3%** (Mythos 5.2; Fable 5.2 74.6%, Opus 5.5 58.7%, GPT-6 Astra 68.1%)
- De novo binder design, 24 hr (protein design, Mythos 5.2): **85.1** (vs Mythos 5.1 79.1, Opus 5.5 without safeguards 82.6); AAV capsid structures: 28 of 34 accurately modeled
- OSWorld 2.1 / WANDR / AutomationBench / FrontierCode / RoboDojo rows are published under the Fable 5.2 name for the same checkpoint (see the Fable 5.2 findings) — same underlying model
- Tau3-Banking / Tau2-Bench, GDPval-AA, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (with tools), Chartography, RLI: published under the Fable 5.2 name for the same checkpoint (74.2% / 73.4% / 41.3%)
- Qualitative: substantial progress on robotics evaluations; two open black-hole physics problems solved by the same checkpoint (credited to Fable 5.2)
- GPQA Diamond, HLE no-tools, LCR / MLCR, CritPt, Artificial Analysis Intelligence Index: no verified public score found

Coding:

- No Mythos-branded coding rows; the checkpoint's coding numbers are published as Fable 5.2 (FrontierCode 2.0 49.1% Xhigh — highest released-model score, FrontierSWE v2 69.9%)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (no MRCR / RULER / GraphWalks value published); 1M window and 128K output officially specified

### Normalized scores (1–100)

- **Tool use: 98/100.** Same checkpoint as Fable 5.2 (OSWorld 89.3%, WANDR 82.1%, RLI 41.3% under the Fable name) plus best-in-class cyber tooling: CyScenarioBench 76.3% and CVE Rediscovery 89.6% with better severity calibration than prior models. Capped by the forced-tool-use 400 limitation and gated access limiting independent third-party verification.
- **Reasoning: 97/100.** Terminal-Bench-Science 0.1 75.3% (the checkpoint's best published science-agent number), HLE with tools 74.2%, two open physics problems, FLT formalization in 30h — same evidence base as Fable 5.2.
- **Context window: 95/100.** 1M total / 128K max output (top published tier); no public ≥98%-retrieval measurement, so not 100.
- **Multimodal: 68/100.** Text + image in, text out (image-in band); Chartography 73.4% best-in-set vision on the shared checkpoint; no audio/video I/O.
- **Coding: 97/100.** FrontierCode 2.0 49.1% and FrontierSWE v2 69.9% belong to this same checkpoint (published as Fable 5.2); >90% of Anthropic's core codebase merges are Claude-written. Unpublished classic single-shot benchmarks cap it below 100.
- **Cost efficiency: 38/100.** $8/$40 per 1M — the same premium price as Fable 5.2 (2x Opus 5.5); batch 50% off and $0.20 cache reads soften it; no free tier and verification-gated access.
- **Overall Score: 91/100.** Mean of the five non-cost dims (98+97+95+68+97)/5 = 91.0 — same checkpoint, same capability profile as Fable 5.2 with stronger unsandboxed cyber work. Best-fit recommendation: verified security teams and biomedical researchers get the strongest frontier model for offensive-defense and bio workflows; everyone else uses Fable 5.2.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-11
- Method: public internet research (official Anthropic launch announcement, Mythos 5.2 and Fable 5.2 model documentation pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5.2 and Mythos 5.2 (launch announcement + benchmarks table)](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Mythos 5.2 — model overview (official docs)](https://platform.claude.com/docs/en/models/mythos-5-2/overview)
  - [Claude Fable 5.2 — model overview (shared checkpoint specs)](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [Claude Fable 5.2 and Claude Mythos 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
