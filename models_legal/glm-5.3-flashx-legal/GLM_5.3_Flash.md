# GLM-5.3-FlashX-Legal — findings by GLM 5.3 Flash

- Source: Z.ai (`glm-5.3-flashx-legal`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX-Legal (marketed in Z.ai docs as "GLM-Legal")
- **Short description:** Z.ai's legal-domain specialist built on GLM-5.3-FlashX: legal mid-training plus reinforcement learning in tens of thousands of task environments modeled on real-world legal workflows, aimed at legal research, contract review, and legal document drafting. It is a domain variant of another tracked entry (`glm-5.3-flashx` — same 320B/18B MoE family and identical pricing), not a from-scratch model, but it ships as a distinct vendor route (`glm-5.3-flashx-legal` model code + separate OpenRouter listing), so it is tracked separately.
- **Provider / access:** Z.ai API, OpenAI-compatible Chat Completion, model code `glm-5.3-flashx-legal`. Also listed on OpenRouter as `z-ai/glm-5.3-flashx-legal` (Z.ai provider, no markup). Not on the OpenCode Console catalog and not part of the GLM Coding Plan (Z.ai notes FlashX "is not yet available on the plan"). Z.ai recommends running it in an agent environment with legal MCP services (laws/cases data + Word document drafting/revision) and offers the AutoClaw Legal Assistant workspace.
- **Release / knowledge:** GLM-5.3-Flash base released 2026-08-26 (Z.ai release notes); the FlashX speed variant followed, and the Legal variant is documented with an official Harvey LAB chart dated 2026-10-21 — exact Legal release date not published. Knowledge cutoff not published.
- **IDs:** `glm-5.3-flashx-legal` (Z.ai), `z-ai/glm-5.3-flashx-legal` (OpenRouter). No free ID found on any cited route (the free GLM-4.7-Flash/GLM-4.5-Flash SKUs are a different, older family).
- **Context window:** 1M tokens (vendor guide: "Text parameters are consistent with GLM-5.3, with support for a 1M-token context window"; family card Context Length 1M); maximum output 128K (family card). No independent long-context retrieval measurement published.
- **Modalities:** Per the official family guide covering all three model codes (`glm-5.3-flash` / `glm-5.3-flashx` / `glm-5.3-flashx-legal`): input video / image / text / file (PDF), output text. Thinking is always on (`thinking.type` only supports `enabled`, recommended `reasoning_effort: max`), function calling, context caching, structured output, web search tool ($0.01/use). Caveat: OpenRouter's capability list for the `-legal` route exposes only text-generation parameters — vision on this specific SKU is vendor-documented but not independently exercised.
- **Pricing (as of 2026-11-12):** $0.37 in / $1.25 out per 1M tokens; cached input $0.075 (cached-input storage limited-time free) — identical to GLM-5.3-FlashX, verified on both Z.ai's official pricing page and OpenRouter's no-markup listing.
- **Architecture:** GLM-5.3-Flash family: 320B total / 18B activated MoE, the first open frontier architecture combining sparse and linear attention (3.01× less attention compute and 4.44× smaller KV cache vs GLM-5.3), Manifold-Constrained Hyper-Connections (mHC), 30T-token multimodal pre-training corpus; FlashX serves at ~200 tokens/s. The Legal SKU adds legal-domain mid-training + post-training (RL in tens of thousands of legal-workflow task environments). Weight publication for the Legal SKU specifically is not confirmed; the base GLM-5.3-Flash is open-source.

### Raw benchmarks found

Agent / tool use:

- Harvey LAB (legal agents, all-criteria pass rate): **19.2%** (Z.ai official docs chart, 2026-10-21 — +12.5 percentage points over the base model, state-of-the-art among open-source models in this evaluation; the same benchmark runs on Artificial Analysis as Harvey LAB-AA v1.1, hallucination-gated all-pass)
- Harvey LAB-AA v1.1 independent AA measurement for this SKU: no verified public score found (no AA model page for the `-legal` slug)
- AutomationBench (agentic SaaS workflows): **48.8** — GLM-5.3-Flash base sibling figure, cited by Z.ai; provisional family proxy only, not measured on the Legal SKU
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found for the Legal SKU

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **57** (v4.1.1, at $0.045/task) — measured on GLM-5.3-Flash, the base sibling; cited as family evidence, provisional for the Legal SKU (domain post-training may shift general-reasoning behavior in either direction)
- GPQA Diamond / HLE / MRCR / CritPt: no verified public score found for the Legal SKU

Coding:

- DeepSWE: **63.4** (vs GLM-5.2's 46.2) and Z.ai Code Bench v1.0 max effort **29.0** (vs Claude Opus 4.8's 29.5, Claude Code 2.1.207 harness) — both are GLM-5.3-Flash base-sibling figures from Z.ai's launch material; provisional family proxy. The Legal SKU's domain training shifts capability toward legal deliverables, so coding parity is not assumed.
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found for the Legal SKU

Long context:

- No MRCR / RULER / GraphWalks retrieval reported at any window length; the 1M window and the sparse+linear-attention long-context design are vendor-specified, not independently measured.

### Normalized scores (1–100)

- **Tool use: 62/100.** Direct evidence is Harvey LAB 19.2% all-pass — SOTA among open models on a hallucination-gated legal agentic benchmark, but low in absolute terms with no published frontier reference to anchor the top of the scale; the family's agentic stack (function calling, MCP-first legal workflow design, base sibling's AutomationBench 48.8) supports mid-60s. Capped by the absence of any general tool-use benchmark measured on this SKU.
- **Reasoning: 78/100.** Family proxy: GLM-5.3-Flash scored 57 on AA Intelligence Index v4.1.1 (near-frontier); the Legal SKU adds legal-domain RL that lifted Harvey LAB by 12.5pp, but no general reasoning benchmark is published for this SKU, so the family level is discounted for domain-specialization drift. Capped by zero first-party general reasoning measurements.
- **Context window: 95/100.** 1M-token window verified in vendor docs (≥1M tier = 95–100), with 128K max output as a caveat; no ≥98% retrieval measurement at 512K+ exists, so not scored 100.
- **Multimodal: 78/100.** Official family guide covers this SKU under native multimodal input (video / image / text / file, text out) — the +video/PDF-input tier (75–90); kept at the bottom of the tier because the legal positioning is document-centric and OpenRouter's route advertises only text parameters.
- **Coding: 68/100.** No coding benchmark on the Legal SKU; base sibling's DeepSWE 63.4 and Z.ai Code Bench 29.0 (≈ Opus 4.8) indicate a strong coding family, but legal-domain post-training shifts optimization away from code, so the proxy is discounted. Capped by the missing direct measurement.
- **Cost efficiency: 94/100.** $0.37/$1.25 per 1M tokens (cache $0.075) sits between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92) reference points on the evaluated paid tier; no free tier exists.
- **Overall Score: 76.2/100.** Mean of the five quality dims (62+78+95+78+68)/5 — a strong long-context multimodal base repackaged for legal work with genuinely measured (if niche-benchmarked) domain gains; best fit for legal research/contract-review agent pipelines, not as a general-purpose coder.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-12
- Method: public internet research (Z.ai official docs and pricing, OpenRouter API pages, OpenCode Console catalog); scores are normalized 1–100 interpretations, not official vendor scores. Family-sibling benchmark figures (AA Index 57, DeepSWE 63.4, AutomationBench 48.8, Z.ai Code Bench 29.0) are cited as labelled proxies of the base GLM-5.3-Flash, never merged into this SKU's own record.
- Reference URLs:
  - [Z.ai docs — GLM-5.3-Flash/FlashX guide, incl. GLM-5.3-FlashX-Legal section (Harvey LAB 19.2%)](https://docs.z.ai/guides/vlm/glm-5.3-flash)
  - [Z.ai docs — Pricing (GLM-5.3-FlashX-Legal $0.37/$1.25, cached $0.075)](https://docs.z.ai/guides/overview/pricing)
  - [OpenRouter — z-ai/glm-5.3-flashx-legal API page](https://openrouter.ai/z-ai/glm-5.3-flashx-legal)
  - [Z.ai docs — New Released (model timeline, GLM-5.3-Flash 2026-08-26)](https://docs.z.ai/release-notes/new-released)
  - [Z.ai blog — GLM-5.3-Flash announcement](https://z.ai/blog/glm-5.3-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
