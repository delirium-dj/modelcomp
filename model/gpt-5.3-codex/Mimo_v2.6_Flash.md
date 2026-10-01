# GPT-5.3-Codex — findings by Mimo v2.6 Flash

- Source: OpenAI/gpt-5.3-codex
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's agentic coding flagship released 2026-02-05 — "combines the frontier software engineering performance of GPT-5.2-Codex with the broader reasoning and professional knowledge capabilities of GPT-5.2" (ModelsAtlas), and OpenAI's "first model that was instrumental in creating itself." Competes with Claude Opus 4.6; 25% faster per OpenAI (Wikipedia). Not a variant/alias of another entry in this dataset (distinct from `gpt-5.3-codex-spark`).
- **Provider / access:** OpenAI Responses/Chat Completions API (API availability 2026-02-24 — CloudPrice/ModelsAtlas/getdeploying; Codex app + web at 2026-02-05 launch, ChatGPT Pro-gated at launch per Wikipedia); OpenRouter/Azure/Databricks/Vercel routes (CloudPrice provider list). **OpenCode Zen listing observed** (whichllm sidebar, 400K context) — price not captured this pass.
- **Release / knowledge:** announced/released 2026-02-05 (OpenAI blog, Wikipedia), API 2026-02-24; **knowledge cutoff 2025-08-31** (AI Wiki, getdeploying); deprecation 2027-08-24 (CloudPrice).
- **IDs:** `gpt-5.3-codex`.
- **Context window:** **400K tokens / 128K max output** (CloudPrice, getdeploying, BenchLM, ModelsAtlas) — a notable expansion over the 200K of earlier Codex variants (AI Wiki).
- **Modalities:** **text + image + PDF in**, text out (CloudPrice input modalities; ModelsAtlas "text · image · file" / "image and document analysis"); AI Wiki lists text+image; no audio/video; reasoning yes (low/medium/high/**xhigh**), function calling, structured outputs, web search, prompt caching (CloudPrice capabilities).
- **Pricing (as of 2026-10-01):** **$1.75 / 1M input, $14.00 / 1M output** (OpenAI list — getdeploying, ModelsAtlas, CloudPrice; BenchLM agrees); **cached input $0.175** (90% off, AI Wiki). No free tier verified.
- **Architecture:** proprietary closed weights; GPT-5.3 family lane (Codex released Feb 5, Instant Mar 3 2026 — AI Wiki).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.
> OpenAI's headline table ran all evals at **xhigh reasoning effort** (OpenAI blog footnote).

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (OpenAI; BenchLM confirms across comparisons) — vs GPT-5.2-Codex 64.0%, GPT-5.2 62.2%
- OSWorld-Verified: **64.7%** (OpenAI; BenchLM) — near-double GPT-5.2-Codex 38.2%
- GDPval (wins or ties): **70.9%** (OpenAI) — matches GPT-5.2 (high) 70.9%
- SWE-Lancer IC Diamond: **81.4%**; Cybersecurity CTF: **77.6%** (OpenAI blog)
- Terminal-Bench Hard: **~50%** (#11 catalog rank — CloudPrice); Gert Labs **57.47%**, JobBench **33.7%** (BenchLM)
- τ²-Bench / τ³ / GDPval-AA Elo: **no verified public score found** (CloudPrice TAU2 row 0.9, rank #94 — ambiguous rounding, not used)
- Claw-Eval: **no verified public score found** (note: methodology expects it — N/A, slight penalty applied via band placement)

Reasoning / knowledge:

- GPQA: **~90%** (CloudPrice catalog row 0.9, rank #26 — rounded, treat as ~85–94 band)
- HLE: **~40%** (CloudPrice row 0.4, rank #21)
- AA Intelligence Index: **36.9** (#44 catalog — CloudPrice); AI Wiki reports "scored 44" for xhigh — conflicting citations, wider value used as mid-high tier
- LCR: **~80%** (#9 — CloudPrice); IFBench: **~80%** (#34); SciCode reasoning-side: 0.5 (#31) — catalog rows rounded to 1 decimal
- FrontierMath / AIME / MMLU-Pro: **no verified public score found**

Coding:

- SWE-bench Verified: **85%** (BenchLM-sourced; Vals difficulty profile 90/73/55/33 easy→extra-hard — GPT 5.3 Codex)
- SWE-bench Pro (Public): **56.8%** (OpenAI) — vs GPT-5.2-Codex 56.4%, GPT-5.2 55.6%
- SWE-Rebench: **58.2%**; Vibe Code Bench: **61.77%** (BenchLM)
- SciCode: **~50%** (CloudPrice 0.5, #31); AA Coding Index lane: **62.7–67.2** (BenchLM category scores)
- LiveCodeBench: **no verified public score found**

Long context:

- 400K window; MRCR / RULER / GraphWalks retrieval: **no verified public score found**

Multimodal:

- Text + image + **PDF** in (CloudPrice/ModelsAtlas) — image+PDF tier qualifies for 75–90 band; MMMU / CharXiv: **no verified public score found** (BenchLM multimodal: 0 rows)

### Normalized scores (1–100)

- **Tool use: 86/100.** A deep agentic ledger — Terminal-Bench 2.0 77.3% (well above mid band), OSWorld-Verified 64.7% (near-double its predecessor), GDPval 70.9% wins/ties, SWE-Lancer 81.4%, CTF 77.6%, TB Hard ~50% (#11) — no τ² and no Claw-Eval row hold it out of the 90s.
- **Reasoning: 75/100.** Catalog rows put GPQA ~90% and HLE ~40% at/near frontier anchors, but they are 1-decimal rounded (not harness-exact), AA Intelligence Index 36.9–44 is mid-tier, and no FrontierMath/MMLU-Pro row exists — scored as a strong mid-high blend, not a verified frontier reasoning lane.
- **Context window: 78/100.** 400K sits in the 200K–500K tier (65–84) at its upper end (400K, 128K output); no retrieval measurement to justify 85+.
- **Multimodal: 75/100.** Image + PDF input puts it in the +image/PDF-in band (75–90) at its floor — no vision benchmark row, no audio/video input, no non-text output; consistent with the 75-floor treatment used for the band elsewhere in this queue.
- **Coding: 89/100.** SWE-bench Verified 85% clears the DeepSWE-74% frontier anchor, SWE-Pro 56.8% is SOTA-class, Vibe 61.77% is near-Opus-4.7 territory, TB2.0 77.3% agentic — one point shy of 90 because SciCode ~50% (<55% ref) and the Coding Index lane 63–67 (<70 ref) both miss the frontier anchors, and no LiveCodeBench row exists.
- **Cost efficiency: 65/100.** $1.75/$14.00 (blended ~$5.8) sits between the ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors, leaning high — softened by the $0.175 cached-input lane (90% off) and tempered by no free tier.
- **Overall Score: 81/100.** (86 + 75 + 78 + 75 + 89) / 5 = 80.6 → 81 — best-fit as an elite agentic-coding workhorse (TB2.0 77.3, OSWorld 64.7, SWE-V 85, GDPval 70.9) with mid-tier composite intelligence, 400K context, and Pro-tier pricing.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (OpenAI GPT-5.3-Codex launch blog benchmark table, AI Wiki family article, Wikipedia release/modalities, CloudPrice/getdeploying/ModelsAtlas catalog specs and pricing, BenchLM head-to-head ledgers, Vals SWE-bench Verified difficulty profile); scores are normalized 1–100 interpretations, not official vendor scores. Note: rounded catalog reasoning rows (GPQA/HLE) are flagged and not treated as harness-exact.
- Future sources: add a new file next to this one, e.g. `GPT_5.3.md`, using the same headings.
