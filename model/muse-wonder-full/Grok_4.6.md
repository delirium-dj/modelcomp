# Muse Wonder Full — findings by Grok 4.6

- Source: Meta / Muse Wonder Full
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta’s 12 Oct 2026 subscription-only Muse Code flagship (max-effort) for frontier coding agents, long-running tool use, and computer use. Distinct from API-priced **Muse Wonder** / `muse-wonder-1.0` ($4/$20) and from the older Muse Spark line.
- **Provider / access:** Muse Code only on **Power** ($50/mo) and **Maximum** ($200/mo) plans. No public per-token Model API ID. Not Chat Completions. No OpenCode Zen Free ID found.
- **Release / knowledge:** 2026-10-12 (Meta model card + Muse Code blog). Knowledge cutoff **not stated**.
- **IDs:** Product name **Muse Wonder Full**. No `opencode/` or Meta Model API slug published for Full (API SKU is `muse-wonder-1.0`).
- **Context window:** **1M tokens** at inference (Meta model card; Muse Code product page).
- **Modalities:** Text, image, video, audio in; text out (model card). Blog: confirm audio on the specific Muse Code surface. Reasoning at **max** in Meta’s scorecard; SWE-Marathon reported at **xhigh**.
- **Pricing (as of 2026-11-01):** Subscription only — Power $50/mo (20× Everyday); Maximum $200/mo (80× Everyday). No $/1M list. Sibling Muse Wonder API is $4 / $0.20 cached / $20 per 1M — **not** Full’s price. Paid.
- **Architecture:** Proprietary closed weights; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (AA): **57.1%** (Meta scorecard, AA source)
- Terminal-Bench 2.1: **no verified official Meta/AA number** (benchgap lists estimates — not used)
- Tau3-Banking: **no verified public score found**
- AutomationBench-AA: **45.4%** (Meta table)
- OSWorld V2.1: **78.4% partial / 39.4% binary** (Meta internal common framework)
- JobBench: **75.3%** (Meta)
- Harvey LAB-AA: **59.1%** (Meta citing AA)
- Agents’ Last Exam / PSI: Meta publishes an internal PSI composite; the HTML table is hard to parse as a 0–100 % — **not scored as a named public harness %**
- Claw-Eval / MCP-Atlas: **no verified public score found**
- CyberGym: **88.4%** (Meta Full risk table)

Reasoning / knowledge:

- GPQA Diamond: **no verified official score** (third-party estimates exist; omitted)
- HLE: **no verified official Meta row**; Artificial Analysis runs HLE-family evals inside the Index
- Artificial Analysis Intelligence Index: **56** on Meta’s v4.3 scorecard; **50** on AA’s live **v5.0** page for Muse Wonder Full (max) — https://artificialanalysis.ai/models/muse-wonder-full
- CritPt / SciCode / LCR: included in AA Index; benchgap marks some AA splits as **measured** (AA-HLE 53.6%, AA-SciCode 62.6%, CritPt 32.9%, AA-LCR 83.7%, AA-Omniscience accuracy 41.0%, GDP.pdf 32.6%) — use as AA-measured, not Meta-lab
- HealthBench Pro: **62.3%** (Meta table)
- GDP.pdf: **33.2%** (Meta citing Surge)

Coding:

- DeepSWE v1.1: **79.0%** (Meta citing Datacurve third-party; Meta says Full tops this vs Opus 5.5 / Astra on that table)
- SWE-Marathon: **57.5%** pass@1 at xhigh (Abundant AI; harness not common vs Codex/Claude Code rows)
- ProgramBench (≥95% tests, mini-swe-agent): **59.0%** (Meta table)
- SWE-bench Verified / SWE-Pro: **no verified official Meta number**
- LiveCodeBench: **no verified official Meta number**

Long context:

- Native **1M**; MemoryBench is internal (Meta quotes **85.5** on the Full column of the Muse Code table). **No verified public MRCR/RULER %** at 512K+.

Multimodal:

- Native image/video/audio in per model card; no MMMU-Pro number on the Meta card.

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld V2.1 78.4% partial, JobBench 75.3%, Harvey LAB-AA 59.1%, and CyberGym 88.4% are strong agent/computer-use signals. Caps: Terminal-Bench 4.0 57.1% is not TB2.1 ~88%+; AutomationBench-AA 45.4%; no Tau3/Claw-Eval; subscription-only so independent tool-harness coverage is thinner than API peers.
- **Reasoning: 88/100.** AA Intelligence Index 50 (v5.0) / 56 (Meta v4.3 sheet) sits well above AA’s stated median ~30; HealthBench Pro 62.3% and AA-measured HLE/CritPt/SciCode splits support a high-but-not-GPQA-documented band. Caps: no official GPQA Diamond; GDP.pdf 33.2% is weak among knowledge-work PDF evals.
- **Context window: 96/100.** 1M maps to 95–100. Not 100: no ≥98% retrieval-at-512K+ public MRCR.
- **Multimodal: 92/100.** Text + image + video + audio in, text out matches the 90–100 audio-in band. Caps: text-only output; blog asks to confirm audio on the Muse Code surface; no MMMU-Pro on the card.
- **Coding: 90/100.** DeepSWE v1.1 79.0% clears the ~74%+ frontier ref; ProgramBench 59% and SWE-Marathon 57.5% are strong long-horizon coding. Caps: TB 4.0 57.1%; no official SWE-Verified; SWE-Marathon harness is not fully common.
- **Cost efficiency: 52/100.** No $0 API; Full is bundled in $50–$200/mo Muse Code plans with no published $/1M. That is paid and worse for bulk token jobs than sub-$1 APIs, but not $10/$50 list. Score on subscription access, not the $4/$20 Wonder API.
- **Overall Score: 90/100.** Mean of 86, 88, 96, 92, 90 = 90.4 → 90 half-up. Best-fit: Muse Code Power/Maximum users who want DeepSWE-class repo agents and 1M omni computer use without an API meter; use API **Muse Wonder** when you need $4/$20 programmatic access.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-11-01
- Method: Public internet research (Meta Muse Wonder model card, Muse Code launch pages, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Wonder model card (Meta Research)](https://research.meta.ai/static/muse-wonder-model-card)
  - [Muse Wonder / Muse Wonder Full product page](https://dev.meta.ai/models/muse-wonder)
  - [Put your ideas to work with Muse Wonder and Muse Wonder Full](https://dev.meta.ai/resources/blog/build-with-muse-wonder)
  - [Artificial Analysis — Muse Wonder Full (max)](https://artificialanalysis.ai/models/muse-wonder-full)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
