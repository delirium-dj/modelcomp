# Claude Opus 4.8 — findings by Grok 4.6

- Source: Anthropic / Claude Opus 4.8 (`claude-opus-4-8`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** May 2026 Opus upgrade over 4.7: hybrid/adaptive reasoning for coding and long-running agents, same $5/$25 list price, later marked legacy once Opus 5 shipped. Fast mode (~2.5× speed) at $10/$50.
- **Provider / access:** Anthropic Claude API Messages (`claude-opus-4-8`); Bedrock `anthropic.claude-opus-4-8`; Google Cloud / Microsoft Foundry / Claude Platform on AWS. Messages API. Status: Active (legacy) as of Anthropic’s current model table.
- **Release / knowledge:** Released 2026-05-28; reliable knowledge cutoff January 2026.
- **IDs:** `anthropic/claude-opus-4-8`. No OpenCode Zen Free ID found.
- **Context window:** 1M tokens; max output 128K (Batch API beta up to 300K). Full 1M at standard per-token rates.
- **Modalities:** Text and images in; text out. Adaptive thinking (default effort `high`; `xhigh`/`max`). Tool / computer use. Fast mode on first-party Claude API only.
- **Pricing (as of 2026-09-19):** $5 / $25 per 1M in / out; cache write $6.25 (5m) / $10 (1h); cache read $0.50; Batch 50% off. Fast mode $10/$50. Paid only.
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**Anthropic**, Terminus-2): **74.6%** (GPT-5.5 Codex CLI 83.4% / Terminus-2 78.2% on the same launch table)
- Terminal-Bench 4.0 (**Artificial Analysis**, later Index v4.3 mix): **22%**
- Tau3-Banking: **no verified public score found**
- τ²-bench Telecom: **94.4%** pass^1 (evals.report listing, 2026-05-28)
- GDPval-AA (**AA launch article**, max effort): **1,890 Elo** (#1 at launch; +137 vs Opus 4.7)
- GDPval-AA v2 (**later AA comparison page**): **1,489 Elo**
- AutomationBench-AA (later AA): **46%**
- AA-Briefcase (later AA): **1,316 Elo**
- OSWorld-Verified: Anthropic notes a harness update; Opus 4.7 restated at **82.3%** — **no verified public Opus 4.8 OSWorld number extracted** from the launch page body
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (**Anthropic launch / Vellum recap**): **93.6%**
- HLE no tools: **49.8%**; with tools: **57.9%** (Anthropic)
- CritPt (**later AA**): **21%**; AA launch also flags scientific-reasoning gains vs 4.7
- Artificial Analysis Intelligence Index: **61.4 / #1** at launch (2026-05-28); later **42** on Index v4.3 (TB 4.0 / CritPt / Omniscience mix)
- AA-Omniscience (later AA): **29** Index points
- AA-LCR v1.1 (later AA): **78%**
- GDP.pdf (later AA): **23%**

Coding:

- SWE-bench Verified (**Anthropic**): **88.6%**
- SWE-bench Pro: **69.2%**
- DeepSWE: **58%** (evals.report, 2026-05-28)
- SciCode (**later AA**): **54%**
- LiveCodeBench: **no verified primary lab score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- Official **1M** / 128K out. AA-LCR v1.1 **78%** is the only retrieval-style figure found; **no MRCR / RULER / GraphWalks** number found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Launch GDPval-AA 1,890 Elo is above the ~1750 frontier ref; TB 2.1 74.6% is strong but below ~88%. Caps: later TB 4.0 22% and GDPval v2 1,489 on the harder AA mix; no Tau3-Banking / Claw-Eval.
- **Reasoning: 91/100.** GPQA 93.6%, HLE 49.8% no-tools, launch Index 61.4 all meet or beat frontier refs. Caps: later Index 42; CritPt 21%; Omniscience Index 29.
- **Context window: 97/100.** Official 1M maps to 95–100; AA-LCR 78% is solid but not ≥98% at 512K+, so not 100.
- **Multimodal: 70/100.** Image + text in / text out and document/computer-use evals (GDP.pdf, OSWorld family). Caps: no audio/video I/O; GDP.pdf 23% on later AA.
- **Coding: 90/100.** SWE-Verified 88.6% and Pro 69.2% lead the May 2026 Anthropic table; DeepSWE 58% is below the 74% frontier ref. Caps: SciCode 54%; no LiveCodeBench primary.
- **Cost efficiency: 50/100.** $5/$25 sits between $3/$15 (~60) and $10/$50 (~30). Fast mode doubles token prices.
- **Overall Score: 87.2/100.** Mean of 88, 91, 97, 70, 90. Best fit: May–mid-2026 Anthropic coding/agents default before Opus 5; still a strong paid 1M-context workhorse.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: Public internet research (Anthropic launch/docs, Artificial Analysis, evals.report); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
