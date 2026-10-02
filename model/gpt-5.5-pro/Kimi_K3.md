# GPT-5.5 Pro — findings by Kimi K3

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's highest-accuracy Pro tier of the GPT-5.5 family (April 2026) for the hardest research, business, legal, and data-science questions, with reduced latency as a stated design goal. GPT-5.5 overall is treated as High for bio/chem and cyber capability under OpenAI's Preparedness Framework, deployed with expanded safeguards and Trusted Access for Cyber.
- **Provider / access:** ChatGPT (Pro, Business, Enterprise) as GPT-5.5 Pro; OpenAI API as `gpt-5.5-pro` (Responses + Chat Completions per the release follow-up of 2026-04-24 confirming API availability).
- **Release / knowledge:** Announced 2026-04-23; API availability from 2026-04-24 (official update note on the announcement). Knowledge cutoff not separately published.
- **IDs:** `openai/gpt-5.5-pro`. No Free ID exists on OpenCode Zen.
- **Context window:** 1M context window per the API pricing announcement for the GPT-5.5 line; 400K in Codex at launch.
- **Modalities:** Text + image in; text out. Reasoning efforts through xhigh on the 5.5 line; full Codex/tooling stack (tool search, apply_patch/shell, computer use) via the API.
- **Pricing (as of 2026-10-01):** $30 / $180 per MTok (input/output) per the official announcement; Batch/Flex at half rate and Priority processing at 2.5× on the 5.5 line. Paid only.
- **Architecture:** Proprietary frontier reasoning model; co-designed/trained/served on NVIDIA GB200/GB300 NVL72 (official announcement); parameter count undisclosed.

### Raw benchmarks found

All numbers from OpenAI's official "Introducing GPT-5.5" (2026-04-23/24), GPT-5.5 Pro column (xhigh) unless marked as family-level.

Agent / tool use:

- BrowseComp: **90.1%** (state of the art among listed models; agentic browsing)
- Family-level (GPT-5.5, no Pro-specific figures published): Terminal-Bench 2.0 82.7%, OSWorld-Verified 78.7%, Toolathlon 55.6%, MCP Atlas 75.3%, Tau2-bench Telecom 98.0% (no prompt tuning)
- Claw-Eval / GDPval-AA (as an Elo): **no verified public score found**

Reasoning / knowledge:

- Humanity's Last Exam: **43.1%** no tools / **57.2%** with tools
- FrontierMath: Tier 1–3 **52.4%**, Tier 4 **39.6%**
- GeneBench (multi-stage genetics/bioinformatics data analysis): **33.2%**
- Internal investment-banking modeling tasks: **88.6%**; GDPval (wins-or-ties): **82.3%**
- GPQA Diamond: no Pro-specific figure (GPT-5.5: 93.6%; GPT-5.4 Pro: 94.4% — family context only)
- Artificial Analysis Intelligence Index: OpenAI cites SOTA on the AA Intelligence/Coding indexes for GPT-5.5 (external harness); **Pro-specific index value not extracted**

Coding:

- No Pro-specific SWE numbers; family-level GPT-5.5: SWE-Bench Pro (public) 58.6%, Terminal-Bench 2.0 82.7% (SOTA), Expert-SWE (internal, ~20h median human tasks) 73.1% (note: third-party memorization concerns on SWE-Bench Pro flagged in the announcement footnote)
- CyberGym: family-level 81.8%

Long context:

- Family-level (GPT-5.5): MRCRv2 8-needle 87.5% @128–256K, **81.5%** @256–512K, **74.0%** @512K–1M; GraphWalks BFS 1M f1 **45.4%** — Pro-specific numbers not published.

### Normalized scores (1–100)

- **Tool use: 94/100.** BrowseComp 90.1% SOTA at the Pro tier plus the family's 98.0% Tau2-Telecom / 75.3% MCP Atlas / 78.7% OSWorld stack sit at the top of the frontier tool-use references; capped only by fewer Pro-specific tool-eval breakouts.
- **Reasoning: 95/100.** HLE 57.2% tooled, FrontierMath T4 39.6%, GeneBench 33.2%, and family GPQA 93.6% are at or beyond the frontier reference lines; tester-reported step-up over GPT-5.4 Pro in research workflows (vendor-collected).
- **Context window: 93/100.** 1M window (≥1M tier) with family MRCRv2 holding 74% even at 512K–1M and 81.5% at 256–512K — strong but short of the ≥98% @512K bar for a perfect score.
- **Multimodal: 82/100.** Image input with MMMU-Pro 83.2% (family, with tools) and document/GUI understanding via computer use; no audio input and text-only output cap it below the 90+ band.
- **Coding: 91/100.** Pro tier of the family holding TB 2.0 82.7% (SOTA) and SWE-Bench Pro 58.6%; capped slightly by no Pro-specific coding numbers and the public memorization caveat on SWE-Bench Pro.
- **Cost efficiency: 18/100.** $30/$180 per MTok — OpenAI's most expensive tier, below the $10/$50 → ~30 reference; half-rate Batch/Flex only partially offsets.
- **Overall Score: 91/100.** Half-up mean of the five quality dims: (94 + 95 + 93 + 82 + 91) / 5 = 91.0 → 91. Best fit: the very hardest research/analysis/agentic workloads where accuracy and persistence justify Pro-tier pricing; GPT-5.5 non-Pro covers the same strengths far cheaper.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.5", 2026-04-23 + 2026-04-24 API-availability update, incl. full evaluation tables and pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
