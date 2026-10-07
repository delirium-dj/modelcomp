# MAI-Code-1-Flash — findings by Qwen 3.8 Flash

- Source: Microsoft AI (curated id `opencode/mai-code-1-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash (Microsoft AI; billed as `MAI-Code-1-Flash` in GitHub Copilot and Microsoft Foundry)
- **Short description:** Microsoft's first fully in-house **coding model**, shipped as GitHub Copilot's low-cost, high-volume workhorse rather than as a general frontier model. It is a small-active-parameter sparse MoE tuned for fast single-pass code generation, repository question answering, refactoring and CLI agent loops, and it deliberately **does not** attempt deliberate multi-step reasoning — Microsoft routes that to the separate `MAI-Thinking-1` model. Headline vendor claim at launch: it beats Claude Haiku 4.5 on every coding benchmark Microsoft tested.
- **Provider / access:** **Closed weights, proprietary** — no Hugging Face release, no open licence, no self-hosting path. Reachable through GitHub Copilot (Free → Enterprise; free/student tiers only via automatic model selection, Business/Enterprise admins must enable it by policy), Microsoft Foundry on Azure, and third-party routers (OpenRouter, Fireworks AI, Baseten). Native function calling and structured output; billing runs through Copilot's premium-request system (annual subscribers at a 0.25× multiplier) as well as per-token.
- **Release / knowledge:** released **2026-06-02** (announced at Build as one of seven MAI models; the official model card PDF is dated 2026-06-02). Pretraining data cutoff is **not published for this release** — Microsoft discloses December 2025 only for the later 1.1 refresh, so the cutoff here is earlier and undocumented.
- **IDs:** `MAI-Code-1-Flash` (Foundry/Copilot), `microsoft/mai-code-1-flash` (router listings), curated id `opencode/mai-code-1-flash`. **No aggregator page exists**: BenchLM returns 404 for `mai-code-1-flash` and Artificial Analysis has no model page for it either, so there is no independent harness coverage of this ID.
- **Context window:** **256,000 tokens total, 128,000 max output** — confirmed by the curated `meta.json` and by third-party coverage that states the window and output ceiling are "unchanged from the predecessor" when 1.1 shipped.
- **Modalities:** **text in / text out only** (plus tool calls and structured output). This is explicitly the text-only June release; native **image** input (screenshots, diagrams, UI mockups) arrived only in `MAI-Code-1.1-Flash`. No audio, no video, no non-text output.
- **Pricing (as of 2026-10-07):** **$0.75 per 1M input / $4.50 per 1M output, cached input $0.075** — the curated note matches the vendor rate card exactly. For orientation: the August refresh cut all three rates by 73.3 % to $0.20/$1.20 (cached $0.02), which puts this release's blended 3:1 price at ≈$1.69 per 1M against a peer median of ≈$1.86. `noFreeId: true` — no free hosted tier.
- **Architecture:** sparse Mixture-of-Experts. Microsoft does not publish a parameter count for this ID in its model card; third-party coverage of the family describes **~137–138 B total with ~5 B active per token** (the figure is stated for the 1.1 refresh and reported as unchanged in kind for the June model). Treat the exact count as **unverified for this ID**.
- **Identity flag:** this folder is the **June 2026 original**, distinct from `model/mai-code-1.1-flash/` (August 11, 2026 mid-cycle refresh: SWE-bench Verified 72.6 %, Terminal-Bench 2.1 62.9 %, adds vision, ~25 % fewer tokens per solve). It is also unrelated to `model/mai-experimental-test/`, whose copy of my report remains quarantined.

### Raw benchmarks found

All rows are **vendor-reported by Microsoft** (launch post + model card) or derived from vendor statements — there is no independent harness score for this ID anywhere I checked.

Coding / agentic coding:

- SWE-bench Verified: **71.6 %** (vs Claude Haiku 4.5 **66.6 %**) — Microsoft also reports ~**25 % more tokens per solve** than the 1.1 refresh needs
- SWE-bench Pro: **51.2 %** (vs Claude Haiku 4.5 **35.2 %**, a 16-point vendor-claimed lead)
- Terminal-Bench: **≈51.6 % implied** (derived, not published — Microsoft states 1.1's Terminal-Bench 2.1 62.9 % is "a 22 % improvement over the predecessor's score on the prior terminal benchmark"; 62.9 / 1.22 ≈ 51.6). Flagged as a derived figure, used only as a band indicator
- Domain-specific: Microsoft reports **.NET tasks +15 %** for 1.1 over this release, i.e. this model is the weaker .NET baseline; Copilot-side reporting claims **~60 % fewer premium-request credits on hard tasks** versus the default model it replaced
- LiveCodeBench, DeepSWE, SciCode, AA Coding Index, SWE-Rebench, Aider polyglot: **no verified public score found for this ID**

Reasoning / knowledge:

- GPQA, HLE, MMLU-Pro, AIME, CritPt, AA-LCR, AA Intelligence Index, IFBench, Omniscience: **no verified public score found for this ID** — no reasoning-mode row exists either, since deliberate reasoning is routed to `MAI-Thinking-1`

Agent / tool use:

- τ²-bench, τ³-bench, Toolathlon, Claw-Eval, GDPval-AA, AutomationBench, BrowseComp, OSWorld: **no verified public score found for this ID**
- Native function calling and structured output are supported and used by Copilot's agent loop (capability, not a score)

Multimodal / long context:

- No vision/audio/video capability on this ID (added in 1.1), so no MMMU-Pro/Chartography-style row exists
- MRCR, AI-Needle, LongBench: **no verified public score found for this ID** — the 256 K window is disclosed but never retrieval-verified in public

### Normalized scores (1–100)

- **Tool use: 62/100.** Function calling is native and Copilot's CLI agent loop is a real, heavily used tool harness, and an implied ~51.6 % Terminal-Bench result is squarely in the methodology's mid band (~45–60 %). But there is **zero** independent agentic evidence — no τ²/τ³, Toolathlon, Claw-Eval, GDPval or AutomationBench row exists for the ID anywhere — so the score rests on one derived vendor number plus deployment reality ("slight penalty, no hallucinated score").
- **Reasoning: 52/100.** No public reasoning, knowledge or instruction-following benchmark row exists for this model at all, by design: Microsoft states there is no toggleable extended-reasoning mode and routes multi-step planning to MAI-Thinking-1. Its measured strengths are code-local (SWE-bench, .NET-style edits), and AA/BenchLM carry no Intelligence Index for the ID, so this is scored as unmeasured-at-mid rather than assumed weak — the floor of the methodology's mid tier.
- **Context window: 72/100.** 256,000 tokens with a 128,000-token output ceiling is comfortably inside the 200 K–500 K tier (65–84; 200 K ≈ 70) and above its midpoint on capacity, but the window is **never retrieval-verified in public** — no MRCR, AI-Needle or LongBench row exists for the ID — so it sits at the tier's middle rather than its top.
- **Multimodal: 12/100.** Text in / text out only. This is the methodology's 10–20 band for text-only models, placed near its floor because the omission is a *known, vendor-confirmed gap* — the very next release adds native image input — not a neutral design choice like a pure-text research model's.
- **Coding: 72/100.** SWE-bench Verified 71.6 % is just under the methodology's frontier reference (74 %+) and SWE-bench Pro 51.2 % is genuinely good on a harness where most models score far lower, so the repository-level evidence is real and vendor-consistent — but every one of those numbers is Microsoft-run, the derived terminal figure is mid-band, and there is no independent re-run, LiveCodeBench, SciCode or Coding-Index row to corroborate them. Strong agentic coder on paper; unverifiable in the literature.
- **Cost efficiency: 87/100.** $0.75/$4.50 with cached input at $0.075 is close to the methodology's $1.25/$4.25 ≈ 88 anchor and, on a blended 3:1 basis (≈$1.69/1M), slightly *better* than the peer median (≈$1.86) — plus Copilot's premium-request system effectively bundles it into existing subscriptions. Deductions: the $4.50 output rate is high for a "flash" tier, this model uses ~25 % more tokens per solve than its successor, there is no free hosted tier (`noFreeId`), and closed weights mean no self-hosted escape hatch.
- **Overall Score: 54/100.** Mean of the five quality dimensions (62 + 52 + 72 + 12 + 72) / 5 = 270 / 5 = 54.0 → 54; Cost excluded per `RULES.md`. Best fit: teams already paying for GitHub Copilot who want a fast, cheap model inside its CLI/IDE surfaces for single-pass edits, repo Q&A and refactors — a specialised tool whose vendor coding numbers are strong but whose reasoning, agentic and multimodal profile is either unmeasured (by anyone) or absent (by design). Anyone needing vision, deep reasoning, self-hosting, or independent verification should look at `model/mai-code-1.1-flash/` or an open-weight coding model instead.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (Microsoft AI **MAI-Code-1-Flash model card PDF** (microsoft.ai, dated 2026-06-02), Microsoft AI's launch posts and Build announcement coverage, GitHub Copilot / Microsoft Foundry billing details as summarised by HokAI's model review (pricing, window, vision gap versus 1.1), APIMart and Aiinity catalogue listings, third-party hands-on reviews); scores are normalized 1–100 interpretations, not official vendor scores. **Evidence status:** this is a vendor-only-evidence model — BenchLM and Artificial Analysis have no page for this ID (both 404), so every capability number is Microsoft-reported or derived from a vendor statement, and the derived Terminal-Bench figure is labelled as such. That lack of independent coverage is why each dimension names its missing harnesses explicitly.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
