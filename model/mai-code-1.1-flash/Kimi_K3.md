# MAI-Code-1.1-Flash — findings by Kimi K3

- Source: Microsoft AI (`mai-code-1.1-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's small-tier vision-capable coding model, GA in GitHub Copilot 2026-08-11 (successor to mai-code-1-flash, which retired 2026-09-10). 138B/5B sparse-MoE trained on >150k Copilot RL environments; added local on-device execution in GitHub Copilot on 2026-10-07.
- **Provider / access:** GitHub Copilot (all surfaces: VS Code, Visual Studio, Copilot CLI, cloud agent, GitHub Mobile, JetBrains, Eclipse, Xcode; Business/Enterprise behind an admin policy); local download in Copilot on supported Windows devices (2026-10-07); `mai-code-1.1-flash` model ID. No standalone per-token public API; billing rides Copilot plans (0.25x premium-request multiplier on annual plans).
- **Release / knowledge:** 2026-08-11; pretrain cutoff Dec 2025 (model card); trained Mar–Aug 2026.
- **IDs:** `mai-code-1.1-flash` (GitHub Copilot). No OpenCode Zen Free ID; "free" = local inference on own hardware.
- **Context window:** 256,000 tokens; max output 128,000 (models.dev). Local run: 53 GB footprint, 75.5 GB peak RAM at full 256K context (Microsoft via windowsreport; >120 GB RAM recommended per explainx).
- **Modalities:** text + image in → text out (native vision for screenshot-to-code); agentic tool use in Copilot harness; JSON via Copilot. No audio/video.
- **Pricing (as of 2026-10-09):** Copilot list **$0.20 / $0.02 cached / $1.20** per 1M in/cached/out — ~73% lower list than mai-code-1-flash ($0.75/$0.075/$4.50); local execution = $0 per inference.
- **Architecture:** transformer + sparse MoE, **138B total / 5B active** (model card); adaptive solution-length control; ~25% faster streaming and 25% fewer tokens per task vs predecessor (vendor).

### Raw benchmarks found

(Microsoft model card — self-reported, Copilot/VS Code harness, not independently verified; llm-stats flags accordingly)

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (17.0K avg tokens; vs 51.7% mai-code-1-flash; +22% in Copilot CLI per launch post)
- Tau3-Banking / GDPval-AA / Claw-Eval / MCP Atlas: no verified public score found

Coding:

- SWE-Bench Verified: **72.6%** at 8.6K avg tokens (vs 71.6% / 10.8K for 1-Flash)
- Text2WebApp (internal): **74.1%**; ScreenShot2WebApp (internal): **42.1%**; Vision2Web Level3: **11.5%**
- +15% on .NET tasks, +4% code-survival rate (launch post, vendor)
- LiveCodeBench / SciCode / SWE-bench Pro: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / AA Intelligence Index: no verified public score found (coding-scoped model; benchlm lists only 3 displayable rows, no public overall rank)

Long context:

- 256K window documented; no MRCR/RULER/AA-LCR public score found.

Vision:

- Native screenshot/diagram/mockup → code pipeline (microsoft.ai features page); internal ScreenShot2WebApp 42.1% quantifies it modestly.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 72/100.** Purpose-built agentic coding in the Copilot harness with terminal, repo, and refactor loops (TB 2.1 62.9% vendor) and 150k+ RL environments; capped by zero independent agentic measurements and Copilot-only plumbing.
- **Reasoning: 60/100.** No public GPQA/HLE/AA-Index numbers — the card is coding-scoped and adaptive compute replaces a documented reasoning tier; provisionally mid-tier, verification-capped.
- **Context window: 76/100.** 256K tokens with 128K output and local 75.5 GB peak at full context; no public long-context retrieval evals.
- **Multimodal: 60/100.** Real native image input (screenshot/diagram → code, ScreenShot2WebApp 42.1% internal) but text-only output, no audio/video, and internal-only vision numbers.
- **Coding: 78/100.** SWE-Bench Verified 72.6% at low token cost plus the strongest .NET/Copilot CLI showing in its family — credible daily-driver agentic coding; capped by vendor-only harness numbers and weak Vision2Web L3 (11.5%).
- **Cost efficiency: 92/100.** $0.20/$1.20 Copilot list (0.25x multiplier), ~73% cheaper than its predecessor, and $0 when run locally in Copilot on supported PCs.
- **Overall Score: 69/100.** Mean of 72/60/76/60/78 = 69.2 → 69. Best fit: GitHub Copilot-centric teams wanting a cheap, fast, vision-aware coding model for everyday repo work; look elsewhere for open APIs or frontier reasoning.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (microsoft.ai model page + model card references, GitHub changelog via llm-stats launch analysis, models.dev spec/pricing listing, windowsreport and explainx local-release coverage, benchlm coverage note); scores are normalized 1–100 interpretations, not official vendor scores. All benchmark numbers here are vendor self-reported in the Copilot harness — flagged accordingly.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
