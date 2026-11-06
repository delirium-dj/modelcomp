# Ling 3.2 Flash — findings by GLM 5.3 Flash

- Source: Ant Group (Ant Ling / inclusionAI)/ling-3.2-flash
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Supersedes this agent's same-day `.md.excluded` twin:** the model launched
> 2026-11-05/06 — hours after the earlier negative-research pass (which found no
> public artifact). Twelve fresh independent lookups (official docs first, then
> independent media/arena sources) now establish the model. Weights were still
> not public at research time.

## Model card

- **Name:** Ling 3.2 Flash (`Ling-3.2-flash`)
- **Short description:** Ant Group's (Ant Ling team) latest-generation **natively multimodal** flagship-flash — 560B-total/25B-active MoE with 1M context, fusing vision and language at the architecture level (no external vision modules). Focused on four capability pillars: complex visual understanding, multimodal long-horizon Agent, 3D understanding & interaction, and medical multimodality.
- **Provider / access:** Ant Bailian (百灵) platform API (`chat.ant-ling.com` console) — Chat Completions via **OpenAI-compatible and Anthropic-compatible** protocols (official docs); officially listed for OpenRouter and ZenMux distribution (not yet visible on OpenRouter's `inclusionai/ling-3.2-flash` page at research time); chat体验 via the Ling app/pages. Weights: not yet on Hugging Face (`inclusionAI/Ling-3.2-flash` 401 on page + API, with the probe method validated against `Ling-3.1-flash` → 200; the ecosystem page says the series is open-sourced via the Inclusion AI community, so a repo drop is expected — 3.1 was open-sourced after its own launch).
- **Release / knowledge:** released 2026-11-05/06 (official docs page last updated 2026-11-05; CN announcement via IT之家 2026-11-06 08:00 CST; TechNode dates it Nov 5). Knowledge cutoff: not published on consulted pages.
- **IDs:** `ling-3.2-flash` (Ant Bailian API; OpenAI + Anthropic protocol). No OpenCode Zen ID (absent from the Zen catalog at research time).
- **Context window:** **1M tokens** (official model docs: "context window is capped at 1M"; corroborated by IT之家/TechNode). Max output: not published on consulted pages.
- **Modalities:** **image + text + video in, native** (architectural fusion, no external vision module); text out. Tool calling via both OpenAI and Anthropic protocol shapes (official docs list tool-calling tutorials); structured outputs supported (official tutorial). No audio input; no image-generation output (Ming models handle image generation in the same family).
- **Pricing (as of 2026-11-06):** **free for the first 2 weeks after launch** (official pricing page); steady-state pricing per IT之家 and DesignArena: **$0.30/M input, $0.90/M output** (matches sibling Ling-3.1-flash's listed $0.30/$0.90 on OpenRouter/ZenMux). DesignArena (independent): "new Pareto frontier for Preference vs Price… the cheapest for any model at this performance."
- **Architecture:** MoE, **560B total / 25B activated** parameters (official docs; IT之家 says "~25B"). Not open-weights at research time (API-first; license TBD until the weights drop).

### Raw benchmarks found

**Vendor-published (self-reported, no independent reruns yet — trackers BenchLM/benchmarklist/llm-stats had no Ling-3.2 pages hours after launch). Independent corroboration noted per row.**

Reasoning / knowledge:

- ZEROBench (Sub): **43.71** — vendor-run; comparison point Claude Opus 5 (max) **39.52**. (Via IT之家/今日AI reporting of Ant's published evals; ZEROBench is an ultra-hard reasoning benchmark where sub-10 scores were common for frontier models, so a 43.71 claim is exceptional — pending independent rerun.)

Multimodal:

- OmniDocBench1.5: **92.21** — vendor-run; vs Claude Opus 5 (max) 90.56. (Document understanding.)
- Vision2Web: **85.86** — vendor-run; vs Claude Opus 5 (max) 80.20. (Vision → web/frontend.)

Agent / tool use:

- DesignArena Image-to-Frontend Arena: **Elo 1238, rank #10** — **independently measured by DesignArena** (its own X announcement), tied with Meta/DeepSeek/Anthropic entrants; "new Pareto frontier for Preference vs Price."
- Terminal-Bench / Tau2 / Tau3 / GDPval-AA: no verified public score found.

Coding:

- No SWE-bench Verified / LiveCodeBench / SciCode numbers found. Vision2Web + DesignArena cover the vision-to-frontend slice only; the series' coding-first sibling is Ling-3.1-flash.

Long context:

- 1M window vendor-stated; **no long-context retrieval scores** (MRCR/RULER/GraphWalks) published yet.

### Conflicting results reviewed

- **Release date:** TechNode says Nov 5; IT之家 says announced Nov 6 (08:00 CST); official docs last updated Nov 5. → Stated as 2026-11-05/06 (docs update precedes the CN press push; same launch window).
- **Vendor-run vs independent:** the three Claude-Opus-5-beating numbers are Ant's own evals (via IT之家/今日AI/AIbase/ChengRang — all mutually consistent, but self-reported). The only independently measured capability number is DesignArena's Elo 1238 (arena's own account), which also independently confirms the $0.30/$0.90 price. Morning Hugging Face absence vs today's launch is timing, not contradiction — the weights repo is still private (401 with validated probe method).
- **Active parameters:** "~25B" (IT之家) vs "25B" (official docs) — consistent; official wording used.

### Normalized scores (1–100)

- **Tool use: 73/100.** DesignArena #10 (Elo 1238) is a genuine independent agentic result against Meta/DeepSeek/Anthropic entrants, and long-horizon multimodal Agent is a design headline — but no TB/Tau/GDPval numbers exist yet, capping it below the frontier band.
- **Reasoning: 68/100.** ZEROBench (Sub) 43.71 above Claude Opus 5's 39.52 is the standout signal, but it is vendor-run and uncorroborated; no GPQA/HLE/Index data exists. Scored mid-frontier with the self-report discount applied.
- **Context window: 95/100.** Native 1M window (official docs, corroborated by two independent media reports) puts it in the ≥1M tier; no ≥98% retrieval-at-length evidence yet, so not 100.
- **Multimodal: 88/100.** Native architectural image+text+video fusion (not bolt-on) with vendor-run wins over Opus 5 on OmniDocBench1.5 (92.21) and Vision2Web (85.86); text-only output keeps it out of the 90+ band (no audio in, no non-text out).
- **Coding: 70/100.** Vision2Web 85.86 and the independent DesignArena image-to-frontend top-10 show real frontend/visual-code strength, but zero SWE-bench/LiveCodeBench coverage and a multimodal (not SWE-first) positioning cap it.
- **Cost efficiency: 95/100.** Launched with a 2-week $0 promo (evaluated tier), and its steady-state $0.30/$0.90 is independently certified by DesignArena as the cheapest at this performance tier (Pareto frontier); slight haircut for the promo expiry.
- **Overall Score: 79/100.** (73 + 68 + 95 + 88 + 70) / 5 = 78.8 → 79. Best fit: a price-disrupting natively-multimodal long-context workhorse for document/video understanding, vision-to-frontend generation, and multimodal agent workflows — reasoning and hard-SWE claims await independent reruns.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-06
- Method: public internet research — 12 successful independent lookups (3 search-engine queries; official model docs and pricing page first; then IT之家 original, Today-for-AI, TechNode, AIbase, ChengRang, DesignArena's own X announcement, llm-stats/benchmarklist/BenchLM/OpenRouter/HF-API negative checks); scores are normalized 1–100 interpretations, not official vendor scores. Vendor-run benchmarks are labeled as such; the only independent capability measurement is DesignArena's Elo.
- Reference URLs:
  - [Ant Ling official model docs — Ling-3.2-flash (560B/25B, 1M, native image/text/video)](https://developer.ant-ling.com/en/docs/models/ling/)
  - [Ant Ling official pricing (2-week free launch promo; OpenRouter/ZenMux distribution)](https://developer.ant-ling.com/en/docs/models/price/)
  - [IT之家 original announcement (OmniDocBench1.5 92.21, ZEROBench-Sub 43.71, Vision2Web 85.86, $0.30/$0.90)](https://www.ithome.com/1/023/043.htm)
  - [DesignArena on X — independent confirmation: #10 Image-to-Frontend, Elo 1238, Pareto price frontier](https://x.com/DesignArena/status/2118429408189132952)
  - [TechNode — Ant launches Ling-3.2-flash multimodal model with million-token context](https://technode.com/2026/11/06/ant-launches-ling-3-2-flash-multimodal-model-with-million-token-context/)
  - [Today for AI — English summary of the IT之家 report](https://todayforai.com/en/items/art-9f1c755c-6b5)
  - [AIbase News — corroborating report](https://news.aibase.com/news/32130)
  - [Hugging Face — inclusionAI org (weights repo not yet public at research time)](https://huggingface.co/inclusionAI)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
