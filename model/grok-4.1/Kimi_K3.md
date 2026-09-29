# Grok 4.1 — findings by Kimi K3

- Source: xAI (`grok-4.1`; Zen listing `opencode/grok-4.1`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's November 2025 usability-focused refresh of Grok 4, tuned via large-scale RL for style, personality, helpfulness and lower hallucination. Took #1 on LMArena Text at launch; positioned for creative/emotional/collaborative chat rather than frontier coding. Base model is distinct from the Grok 4.1 Fast API variant (released 2025-11-19).
- **Provider / access:** grok.com, X, iOS/Android apps (Auto mode + model picker); xAI API (`console.x.ai`, OpenAI-compatible Chat Completions); also listed on OpenCode Zen (`opencode/grok-4.1`). Thinking and non-thinking (immediate response) configurations.
- **Release / knowledge:** Released 2025-11-17 (xAI newsroom; silent rollout Nov 1–14, 2025). Knowledge cutoff not publicly stated.
- **IDs:** `opencode/grok-4.1` (Zen); xAI API alias `grok-4.1` / model card at data.x.ai. No Zen Free ID found.
- **Context window:** Zen listing states 128K total. Third-party trackers conflict: llm-stats reports 256K in / 8K out via xAI API; BenchLM lists 1M. Fast variant independently reported at 2M. Scored on the 128K Zen figure (verified listing for this exact ID).
- **Modalities:** Zen listing: text in/out. Consumer Grok 4.1 accepts image input (llm-stats). Reasoning (Thinking mode) yes; tool calls yes (web search tools in production); JSON mode yes via API.
- **Pricing (as of 2026-09-27):** llm-stats tracks $3.00 in / $15.00 out per 1M via xAI. Zen lists "standard pricing" (paid; no free tier).
- **Architecture:** Proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- LMArena Text Arena (**agentic/chat preference**): Grok 4.1 Thinking #1 overall, **1483 Elo** (+31 over best non-xAI); non-thinking #2 at **1465 Elo** (xAI newsroom, 2025-11-17)
- ResearchClawBench: **13.5%** (BenchLM — only agentic row for this exact model)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found (ResearchClawBench 13.5% is the only Claw-family data point)
- Blind pairwise preference vs previous production Grok: **64.78% win rate** (xAI controlled rollout data)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for base 4.1
- HLE: no verified public score found
- FActScore / production hallucination rate: significant reduction vs Grok 4 reported (xAI charts; exact values in images, not text-retrievable)
- EQ-Bench3: chart-topping result reported by xAI (official repo run; exact Elo in image)
- Creative Writing v3: chart-topping result reported by xAI (exact value in image)
- Artificial Analysis Intelligence Index / BenchLM overall: BenchLM unranked for this exact model (1 of 486 benchmarks covered)

Coding:

- SWE-bench Verified: no verified public score found for base 4.1 — Grok 4.1 **Fast** variant reported at **70%** (tokenmix.ai 2026 roundup; treated as provisional proxy, different variant)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- No long-context retrieval (MRCR/RULER/GraphWalks) reported for base 4.1

### Normalized scores (1–100)

- **Tool use: 40/100.** Only public agentic evidence is ResearchClawBench 13.5% (weak) and production web-search tool use with reduced hallucinations; no TB/Tau/GDPval rows exist. Capped by thin, low-end evidence.
- **Reasoning: 78/100.** LMArena #1 at 1483 Elo (+31 margin) and 64.78% blind preference show top-tier general reasoning quality for late 2025; capped by total absence of GPQA/HLE/ARC-class academic numbers for this exact variant.
- **Context window: 58/100.** 128K verified Zen listing maps to the 100K–200K band (50–64); conflicting third-party claims (256K/1M/2M-Fast) not verified for this ID.
- **Multimodal: 15/100.** Evaluated Zen ID is text in/out per listing (text-only = 10–20); consumer variant's image input doesn't transfer to the scored endpoint.
- **Coding: 60/100.** No base-model coding benchmark found; Fast-variant 70% SWE-bench is the only proxy (provisional, different reasoning config). Mid-band provisional score; capped by evidence vacuum.
- **Cost efficiency: 60/100.** $3/$15 per 1M tracked pricing matches the methodology's ~60 anchor exactly.
- **Overall Score: 50/100.** (40+78+58+15+60)/5 = 50.2 → 50. Best fit: conversational/creative companion work where its LMArena-leading style and emotional intelligence matter; not a coding/agentic pick.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-27
- Method: public internet research (xAI newsroom launch post, BenchLM, llm-stats, AI Release Tracker, tokenmix.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
