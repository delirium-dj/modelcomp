# Grok 4.1 — findings by Kimi K3

- Source: SpaceXAI — post-July-2026 branding of xAI (`grok-4.1`; Zen listing `opencode/grok-4.1`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** SpaceXAI's November 2025 usability-focused refresh of Grok 4, tuned via large-scale RL for style, personality, helpfulness and lower hallucination. Took #1 on LMArena Text at launch; positioned for creative/emotional/collaborative chat rather than frontier coding. Base model is distinct from the Grok 4.1 Fast API variant (released 2025-11-19, 2M context, tool-calling tuned). Superseded by the Grok 4.2/4.20 → 4.x line during 2026 and removed from the official API pricing table by Sept 2026.
- **Provider / access:** grok.com, X, iOS/Android apps (Auto mode + model picker); SpaceXAI API (`console.x.ai`, OpenAI-compatible Chat Completions); also listed on OpenCode Zen (`opencode/grok-4.1`). Thinking and non-thinking (immediate response) configurations. As of 2026-09 the `grok-4.1` ID no longer appears in the official pricing table (docs.x.ai lists 4.3/4.20/4.5/4.6/4.7 instead) — legacy status.
- **Release / knowledge:** Released 2025-11-17 (x.ai/news launch post; silent rollout Nov 1–14, 2025). Knowledge cutoff not publicly stated.
- **IDs:** `opencode/grok-4.1` (Zen); SpaceXAI API alias `grok-4.1`; models card PDF at data.x.ai/2025-11-17-grok-4-1-model-card.pdf. API variants `grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning`. No Zen Free ID found.
- **Context window:** Zen listing states 128K total. Third-party trackers conflict: llm-stats reports 256K in; BenchLM lists 1M. The API Fast variant is official at 2M (x.ai/news, 2025-11-19). Scored on the 128K Zen figure (verified listing for this exact ID).
- **Modalities:** Zen listing: text in/out. Consumer Grok 4.1 accepts image input (llm-stats "multimodal input"). Reasoning (Thinking mode) yes; tool calls yes (web search tools in production); JSON mode yes via API.
- **Pricing (as of 2026-09-29):** llm-stats tracks $3.00 in / $15.00 out per 1M for the base tracked endpoint. The Fast API variant launched at $0.20 in / $0.50 out per 1M (cached $0.05) per the official launch post. No current official price — model dropped from docs.x.ai pricing table (checked 2026-09-29). Zen lists "standard pricing" (paid; no free tier).
- **Architecture:** Proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- LMArena Text Arena (**chat preference**): Grok 4.1 Thinking #1 overall, **1483 Elo** (+31 over best non-xAI); non-thinking #2 at **1465 Elo**; Grok 4 was #33 (x.ai/news, 2025-11-17)
- τ²-bench Telecom (Grok 4.1 **Fast** variant): **100%** score, $105 total cost — independent evaluation verified by Artificial Analysis (x.ai/news, 2025-11-19)
- Berkeley Function Calling v4 (Fast variant): **72%** overall accuracy, $400 cost (x.ai/news, 2025-11-19)
- Agentic search, Fast variant + Agent Tools API: Research-Eval Reka **63.9** ($0.046/call; GPT-5 45.5, Claude Sonnet 4.5 41.2), FRAMES **87.6**, internal X Browse **56.3** (x.ai/news, 2025-11-19)
- ResearchClawBench: **13.5%** (BenchLM — only agentic row for this exact base ID)
- Terminal-Bench 4.0 / τ³-Banking / GDPval-AA: no verified public score found for base 4.1
- Blind pairwise preference vs previous production Grok: **64.78% win rate** (xAI controlled rollout data)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for base 4.1
- HLE: no verified public score found
- FActScore / production hallucination rate: Fast variant cuts hallucination rate in half vs Grok 4 Fast with FActScore on par with Grok 4 (x.ai/news charts; exact values in images, not text-retrievable)
- EQ-Bench3: chart-topping normalized Elo reported (official repo, Claude Sonnet 3.7 judge; exact value in image)
- Creative Writing v3: chart-topping normalized Elo reported (exact value in image)
- Artificial Analysis Intelligence Index: no current v4.3 row verified for base 4.1 (deprecated from AA's main classes); BenchLM unranked for this exact model

Coding:

- SWE-bench Verified: no verified public score found for base 4.1 — Grok 4.1 **Fast** variant reported at **70%** (tokenmix.ai 2026 roundup; treated as provisional proxy, different variant)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- Fast variant trained with long-horizon RL for consistent multi-turn performance across its full 2M window (x.ai/news; qualitative, no numeric MRCR/RULER/GraphWalks row published)

### Normalized scores (1–100)

- **Tool use: 60/100.** Fast variant's τ²-bench Telecom 100% (AA-verified) and BFCL v4 72% are top-tier tool-calling evidence, and production web-search tool use shows halved hallucination; still provisional for the scored Zen endpoint because those numbers belong to the Fast variant, not base 4.1, and no TB/GDPval/τ³ rows exist.
- **Reasoning: 78/100.** LMArena #1 at 1483 Elo (+31 margin) and 64.78% blind preference show top-tier late-2025 general quality; capped by absence of GPQA/HLE-class academic numbers and no current AA v4.3 reading for this exact variant.
- **Context window: 58/100.** 128K verified Zen listing maps to the 100K–200K band (50–64); conflicting third-party claims (256K/1M) and the Fast variant's official 2M not verified for this ID.
- **Multimodal: 15/100.** Evaluated Zen ID is text in/out per listing (text-only = 10–20); consumer variant's image input doesn't transfer to the scored endpoint.
- **Coding: 60/100.** No base-model coding benchmark found; Fast-variant 70% SWE-bench is the only proxy (provisional, different reasoning config). Mid-band provisional score; capped by evidence vacuum.
- **Cost efficiency: 60/100.** $3/$15 per 1M tracked pricing matches the methodology's ~60 anchor exactly; the cheap $0.20/$0.50 figure binds to the Fast variant, not this ID, and no current official price exists.
- **Overall Score: 54/100.** (60+78+58+15+60)/5 = 54.2 → 54. Best fit: conversational/creative companion work where its LMArena-leading style and emotional intelligence matter; tool-calling and value seekers should target the 4.1 Fast lineage's successors (Grok 4.20/4.7), as this ID is legacy as of Sept 2026.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: public internet research (x.ai/news launch posts for Grok 4.1 and Grok 4.1 Fast, docs.x.ai model/pricing table, Artificial Analysis, BenchLM, llm-stats, tokenmix.ai); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: added Fast-variant τ²-bench 100% / BFCL v4 72% / agentic-search rows; flagged removal of `grok-4.1` from the current official pricing table; xAI rebranded SpaceXAI; provider/date refreshed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
