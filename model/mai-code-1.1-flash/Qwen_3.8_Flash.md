# MAI-Code-1.1-Flash — findings by Qwen 3.8 Flash

- Source: Microsoft AI (curated id `opencode/mai-code-1.1-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash (Microsoft AI; billed as `MAI-Code-1.1-Flash` in GitHub Copilot and Microsoft Foundry)
- **Short description:** The **August 2026 mid-cycle refresh** of Microsoft's in-house Copilot coding workhorse. Same job description — fast, cheap, high-volume agentic coding across IDE and CLI surfaces rather than a general frontier model — with three material changes over the June original: **native vision input** (screenshots, diagrams, UI mockups), a **+22 % Terminal-Bench jump** (62.9 % on 2.1), and a **73.3 % price cut** across every rate. It is also notably token-efficient: ~25 % fewer tokens per solved task than its predecessor.
- **Provider / access:** **Closed weights, cloud-only, proprietary** — no Hugging Face release, no open licence, no self-hosting or fine-tuning of the base. Live on nine Copilot surfaces (VS Code, Visual Studio, JetBrains, Eclipse, Xcode, GitHub Mobile, Copilot CLI, the Copilot cloud agent, Copilot Chat on GitHub) across every plan from Free to Enterprise — Free/Student tiers get it only via automatic model selection, paid tiers can pin it manually, and Business/Enterprise admins must enable it by policy (it ships off at the org level). Outside Copilot: Microsoft Foundry on Azure plus OpenRouter, Fireworks AI and Baseten; no AWS Bedrock or Google Vertex listing. Native function calling and structured output; annual Copilot subscribers pay a 0.25× premium-request multiplier.
- **Release / knowledge:** released **2026-08-11**; pretraining data cutoff **December 2025** (disclosed for this refresh). Safety approach per the model card: harmful content filtered out of the pretraining mixture, then SFT + RL for behaviour. Microsoft does not state whether Copilot request data feeds future training.
- **IDs:** `MAI-Code-1.1-Flash` (Foundry/Copilot), BenchLM `mai-code-1-1-flash` (canonical), curated id `opencode/mai-code-1.1-flash`. Model card: `microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF`.
- **Context window:** **256,000 tokens total, 128,000 max output** — unchanged from the June predecessor and confirmed by both the curated `meta.json` and third-party coverage.
- **Modalities:** text + **image** in (new in this release: screenshots, diagrams, UI mockups), text/code/tool-call out. **Flag:** the curated note also claims **PDF** input; Microsoft's own framing is "text, image, tool-calls in", and PDF ingestion in Copilot is a *surface* feature rather than a documented model capability, so I score image-in and treat PDF as unverified. No audio in, no video in, no non-text output.
- **Pricing (as of 2026-10-07):** **$0.20 per 1M input / $1.20 per 1M output, cached input $0.02** — exactly the curated figure, a 73.3 % cut from `MAI-Code-1-Flash`'s $0.75/$0.075/$4.50. On a blended 3:1 basis that is **$0.45 per 1M**, which third-party tracking ranks **#18 of 77** GA models with a published price against a **peer median of $1.71** — i.e. cheaper than roughly 78 % of priced models. `noFreeId: true`, though it is auto-selected for Copilot Free/Student users.
- **Architecture:** sparse Mixture-of-Experts, **~137 B total / 5 B active per token** (one source states 137 B, another 138 B in the same article — Microsoft's model card does not print the count in the text I could read, so treat the total as approximate). No toggleable extended-reasoning mode: deliberate multi-step planning is routed to the separate `MAI-Thinking-1` (35 B active / 1 T total sparse MoE), so this ID is tuned for fast single-pass generation, repo QA and refactoring.
- **Identity flag:** distinct release from `model/mai-code-1-flash/` (June 2026, text-only, 3× the price) — same family, new weights, better scores, cheaper. BenchLM carries it as Family "MAI-Code", Variant "flash", **Reasoning type: Reasoning, but unranked with only 3 of 623 tracks covered**; Artificial Analysis has **no page** for either MAI-Code model, so there is no independent Intelligence Index, price or speed measurement anywhere.

### Raw benchmarks found

All rows are **Microsoft-reported from its own model card / Copilot CLI harness** — no independent re-run exists for this ID:

Coding / agentic coding:

- SWE-bench Verified: **72.6 %**, averaging **8.6 K tokens per solved task** — for context, peer-tracking places this at **#22 of 32** models publishing the figure, with a **peer median of 77.6 %**
- Terminal-Bench 2.1: **62.9 %** inside GitHub Copilot CLI, averaging **17.0 K tokens/task**; stated as **+22 % over the predecessor**, and it confirms only 3 of 623 BenchLM tracks (the same TB row is listed under both agentic and coding categories)
- .NET-specific tasks: **+15 %** versus MAI-Code-1-Flash
- Competitive context (published after both launches): **DeepSeek-V4-Flash-0731 posts 82.7 % on the same terminal benchmark at a lower blended token price**, and Microsoft has not published a head-to-head SWE-bench Verified number for it
- LiveCodeBench, SWE-bench Pro, DeepSWE, SciCode, AA Coding Index, SWE-Rebench: **no verified public score found for this ID**

Reasoning / knowledge:

- GPQA, HLE, MMLU-Pro, AIME, CritPt, AA-LCR, AA-IFBench, Omniscience, AA Intelligence Index: **no verified public score found for this ID** (BenchLM's page shows 3 rows in total; AA has no page)

Agent / tool use:

- τ²-bench, τ³-bench, Toolathlon, Claw-Eval, GDPval-AA, AutomationBench, OSWorld, BrowseComp: **no verified public score found for this ID**
- Native function calling and tool-call output are first-class (capability, not a score), and the model is tuned against Copilot CLI's own reinforcement-learning environments — which is why its strongest number is a terminal-coding one

Multimodal / long context:

- No published vision benchmark (MMMU-Pro, Chartography, DocVQA, OmniDocBench) for this ID: vision is new and only demonstrated qualitatively (reads screenshots/diagrams/mockups)
- MRCR, AI-Needle, LongBench: **no verified public score found for this ID** — 256 K window disclosed, never retrieval-verified in public

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 62.9 % is above the methodology's mid-band reference (~45–60 %) and comes from a real agent harness with native function calling, tight loop integration and measured token cost per task (17.0 K tokens) — the most transparent agentic number Microsoft has published for the family. But τ²/τ³, Toolathlon, Claw-Eval, GDPval and AutomationBench are all absent, and the one external comparison available (DeepSeek-V4-Flash-0731 at 82.7 % on the same harness for less money) caps enthusiasm: "slight penalty, no hallucinated score".
- **Reasoning: 52/100.** There is no public reasoning, knowledge or instruction-following row for this ID at all, and the design is explicit about why — no extended-reasoning toggle, with multi-step planning delegated to MAI-Thinking-1. Scored at the floor of the methodology's mid tier as *unmeasured*, not as *weak*: the SWE/TB results imply competent procedural reasoning, but nothing verifies declarative knowledge, planning depth or faithfulness.
- **Context window: 72/100.** 256,000 tokens with a 128,000-token output ceiling sits in the 200 K–500 K tier (65–84, 200 K ≈ 70), sized deliberately so a mid-repository or a long multi-file diff fits in one pass. It stays at the tier middle because there is no MRCR/AI-Needle retrieval evidence for the ID, and because token-per-task discipline (8.6 K/solve, 17 K/TB task) is the interesting metric here rather than raw window depth.
- **Multimodal: 70/100.** Text + image input with text output is the methodology's 60–70 "image in" band, placed at its top because the vision path is native (not OCR-via-surface) and aimed at a concrete developer job — debug from a screenshot instead of a description. It gets no credit toward the 75–90 band: the curated PDF claim is unverified, and **no published vision benchmark exists for the ID**, so capability is documented but not measured.
- **Coding: 74/100.** SWE-bench Verified 72.6 % plus Terminal-Bench 2.1 62.9 % plus +15 % on .NET is a real, efficient repository-coding profile — the frontier band (SWE/DeepSWE 74 %+, TB 85 %+) is just out of reach, and independent peer tracking shows 72.6 % is actually **below the 77.6 % median** of models publishing that number (#22/32). Every figure is vendor-run and the single external comparison on the terminal axis is unfavourable, so this sits at the top of the mid band rather than at the frontier.
- **Cost efficiency: 95/100.** $0.20/$1.20 with cached input at $0.02 is a blended $0.45 per 1M — #18 of 77 priced GA models against a $1.71 peer median, i.e. cheaper than ~78 % of them, and the ~25 % token reduction per solve multiplies the saving in real agent loops. Deductions only for the closed `noFreeId` economics (no self-host escape hatch, Copilot premium-request entanglement, admin gating in Business/Enterprise).
- **Overall Score: 67/100.** Mean of the five quality dimensions (68 + 52 + 72 + 70 + 74) / 5 = 336 / 5 = 67.2 → 67; Cost excluded per `RULES.md`. Best fit: Copilot-committed engineering teams wanting the cheapest first-party agentic coder with screenshot input — CLI-heavy and .NET-heavy agent work at very low per-token cost. Teams that need verified reasoning breadth, open weights, or the strongest raw terminal scores should compare `model/deepseek-v4-flash/`-class models or `model/kimi-k2.7-code/`; teams that need deliberate multi-step reasoning inside Microsoft's stack are pointed at MAI-Thinking-1, not here.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (Microsoft AI **MAI-Code-1.1-Flash model card PDF** as cited by BenchLM, BenchLM `mai-code-1-1-flash` page (3 of 623 tracks, unranked), HokAI's model review for pricing/ranks/limits and the DeepSeek-V4-Flash comparison, Azure AI Foundry catalog entries for the MAI family, Microsoft AI launch coverage); scores are normalized 1–100 interpretations, not official vendor scores. **Evidence status:** vendor-only — Artificial Analysis has no page for this ID and BenchLM assigns no overall score, so every capability row traces to Microsoft, with independent context limited to third-party rank/median calculations and one competitor's published terminal score. That is why each dimension states its missing harnesses instead of inferring them.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
